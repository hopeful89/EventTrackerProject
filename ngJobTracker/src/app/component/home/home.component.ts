import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userCount: any = 0;
  appCount: any = 0;
  constructor(private userSvc: UserService, private appSvc:ApplicationService, private auth: AuthService) {

  }

  ngOnInit(): void {
    this.getUserCount();
    this.getAppCount();
  }

  loggedIn(){
    return this.auth.checkLogin();
  }

  getAppCount(){
    return this.appSvc.count().subscribe(
      res=>{
       this.appCount = res;
      },
      err=>{
        console.error(`Error loading: getAppCount home`)
      }
    )
  }

  getUserCount(){
    return this.userSvc.count().subscribe(
      res=>{
        this.userCount = res;
      },
      err=>{
        console.error(`Error getting user count`, err)
      }
    );
  }
}
