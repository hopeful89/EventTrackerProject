import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/models/application';
import { Contact } from 'src/app/models/contact';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-singleapp',
  templateUrl: './singleapp.component.html',
  styleUrls: ['./singleapp.component.css']
})
export class SingleappComponent implements OnInit {
  showModal = false;
  app: Application;
  contact: Contact = new Contact();
  constructor(private activatedRoute: ActivatedRoute, private appSvc: ApplicationService, private router: Router) {
    this.app = new Application;
  }

  ngOnInit(): void {
    let appid = this.activatedRoute.snapshot.params.appid;
    this.getSingleApp(appid);
  }

  editApp(id:number){
    this.router.navigateByUrl(`application/${id}/update`);
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

  deleteApp(id:number){
    this.appSvc.delete(id).subscribe(
      res=>{
        this.router.navigateByUrl('/application');
      },
      err=>{
        console.error("error deleting application: singleAppComponent");
      }
    )
  }

  getSingleApp(id:number){
    this.appSvc.singleApp(id).subscribe(
      app=>{
        this.app = app;
      },
      error=> {
        console.error('not working in single app ');
      }
    )
  }
}
