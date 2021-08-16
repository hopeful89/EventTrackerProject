import { Component, OnInit } from '@angular/core';
import { MenutoggleService } from 'src/app/services/menutoggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private menuToggle: MenutoggleService) {
   }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.menuToggle.toggle();
  }

  public get showMenuToogle() : boolean {
    return this.menuToggle.showMenu;
  }

}
