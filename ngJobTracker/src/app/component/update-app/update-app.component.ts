import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-update-app',
  templateUrl: './update-app.component.html',
  styleUrls: ['./update-app.component.css']
})
export class UpdateAppComponent implements OnInit {
  application: Application | any;
  constructor(private appSvc:ApplicationService, private activatedRoute: ActivatedRoute, private router: Router ) {

   }

  ngOnInit(): void {
    let appid = this.activatedRoute.snapshot.params.appid;
    this.getSingleApp(appid);
  }
  getSingleApp(id:number){
    this.appSvc.singleApp(id).subscribe(
      app=>{
        this.application = app;
      },
      error=> {
        console.error('not working in single app ');
      }
    )
  }

  removeEmpty(){
    if(!this.application.deadline){
      delete this.application.deadline
    }
    if(!this.application.applyDate){
      delete this.application.applyDate
    }
    if(!this.application.interviewDate){
      delete this.application.interviewDate
    }
  }

  update(){
    this.removeEmpty();
    this.appSvc.update(this.application).subscribe(
      res=>{
        this.router.navigateByUrl(`application/${this.application.id}`);
      },
      err => {
        console.log('Update Application: failed to update application');
      }
    )
  }

}
