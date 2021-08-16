import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  applications: Application[] = [];
  constructor(private appService:ApplicationService, private router: Router) { }
  appView: Application[] = [];
  search: string = '';
  ngOnInit(): void {
    this.loadApplications();
  }

  searchFilter(event:any){
    this.search = event.target.value;
    this.appView = this.applications.filter(app => app.name.toUpperCase().includes(this.search.toUpperCase()) || app.description.toUpperCase().includes(this.search.toUpperCase()));
  }

  loadApplications() {
    this.appService.index().subscribe(
      res=>{
        this.applications = res;
        this.appView = this.applications.map(x => x);
      },
      error=>{
        console.error('ApplicationListComponent: error loadings applications')
      }
    )
  }

  clickToSinglePage(app: Application){
    this.router.navigateByUrl(`/application/${app.id}`);
  }

}
