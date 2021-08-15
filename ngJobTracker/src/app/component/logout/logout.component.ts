import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenutoggleService } from 'src/app/services/menutoggle.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private menuToggle: MenutoggleService, private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.menuToggle.toggle();
    this.auth.logout();
  }
}
