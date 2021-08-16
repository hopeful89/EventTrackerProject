import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenutoggleService } from 'src/app/services/menutoggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private menuToggle: MenutoggleService, private auth: AuthService) {
   }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.menuToggle.toggle();
  }

  public get showMenuToogle() : boolean {
    return this.menuToggle.showMenu;
  }

  loggedin():boolean{
    return this.auth.checkLogin();
  }

}
