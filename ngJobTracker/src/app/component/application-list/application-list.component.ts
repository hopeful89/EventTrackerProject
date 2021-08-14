import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  applications: Application[] = [];
  constructor(private appService:ApplicationService) { }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.appService.index().subscribe(
      res=>{
        this.applications = res;
      },
      error=>{
        console.error('ApplicationListComponent: error loadings applications')
      }
    )
  }

}
