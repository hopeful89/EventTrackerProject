import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-createapp',
  templateUrl: './createapp.component.html',
  styleUrls: ['./createapp.component.css']
})
export class CreateappComponent implements OnInit {
  application: Application = new Application();
  constructor(private appSvc: ApplicationService, private router: Router) { }
  ngOnInit(): void {
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

  createApp(){
    this.removeEmpty();
    this.appSvc.create(this.application).subscribe(
      application => {
        this.router.navigateByUrl('/application')
      },
      error => {
        console.error('fml');
      }
    )
  }



}
