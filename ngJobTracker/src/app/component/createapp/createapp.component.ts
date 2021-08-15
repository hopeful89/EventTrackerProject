import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-createapp',
  templateUrl: './createapp.component.html',
  styleUrls: ['./createapp.component.css'],
})
export class CreateappComponent implements OnInit {
  application: Application = new Application();
  constructor(private appSvc: ApplicationService, private router: Router) {}
  ngOnInit(): void {}

  createApp() {
    if (!this.application.applyDate) {
      this.application.applyDate = null;

      if (!this.application.deadline) {
        this.application.deadline = null;
      }
      if (!this.application.interviewDate) {
        this.application.interviewDate = null;
      }
      this.appSvc.create(this.application).subscribe(
        (application) => {
          this.router.navigateByUrl('/application');
        },
        (error) => {
          console.error('fml');
        }
      );
    }
  }
}
