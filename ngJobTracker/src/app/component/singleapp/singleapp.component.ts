import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/models/application';
import { Contact } from 'src/app/models/contact';
import { ApplicationService } from 'src/app/services/application.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-singleapp',
  templateUrl: './singleapp.component.html',
  styleUrls: ['./singleapp.component.css']
})
export class SingleappComponent implements OnInit {
  showModal = false;
  showEditModal = false;
  app: Application;
  contact: Contact = new Contact();
  constructor(private activatedRoute: ActivatedRoute, private appSvc: ApplicationService, private router: Router, private contactSvc: ContactService) {
    this.app = new Application;
  }

  ngOnInit(): void {
    let appid = this.activatedRoute.snapshot.params.appid;
    this.getSingleApp(appid);
  }

  editApp(id:number){
    this.router.navigateByUrl(`application/${id}/update`);
  }

  toggleEditModal(cont?:Contact){
    this.showEditModal = !this.showEditModal;
    if(cont){
      this.contact = Object.assign({}, cont);
    }
  }

  createContact(){
    this.contactSvc.create(this.app.id, this.contact).subscribe(
      res=>{
        this.getSingleApp(this.app.id);
        this.contact = new Contact();
      },
      err=>{
        console.log('error creating contact in singleapp');
      }
    )
  }

  updateContact(){
    this.contactSvc.update(this.contact, this.app.id).subscribe(
      res => {
        this.contact = new Contact();
        this.showEditModal = false;
        this.showModal = false;
        this.getSingleApp(this.app.id);
      },
      err=> {
        console.log('error update contact in singleapp')
      }
    )
  }

  deleteContact(contactid:number){
    this.contactSvc.delete(this.app.id, contactid).subscribe(
      res=>{
        this.getSingleApp(this.app.id);
      },
      err => {
        console.log('error deleting contact in singleapp');
      }
    )
  }

  clear(){
    this.contact = new Contact();
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
