import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.user.username, this.user.password).subscribe(
      login =>{
        this.router.navigateByUrl('/application')
      },
      invalid => {
        console.error('broken', invalid)
      }
    )
  }
}
