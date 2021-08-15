import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser:User = new User();
  confirm:string = '';
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    if(this.confirm === this.newUser.password){
      this.auth.register(this.newUser).subscribe(
        data => {
          console.log('SignupComponent.register(): user registered.');
          this.auth.login(this.newUser.username, this.newUser.password).subscribe(
            next => {
              console.log('SignupComponent.register(): user logged in');
              this.router.navigateByUrl('/application');
            },
            error => {
              console.error('SignupComponent.register(): error logging in.');
            }
          );
        },
        err => {
          console.error('SignupComponent.register(): error registering.');
          console.error(err);
        }
      );
    }else{
      this.confirm = '';
      console.log('passwords dont match')
    }

  }

}
