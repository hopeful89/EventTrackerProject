import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenutoggleService {
  showMenu:boolean = false;
  constructor() { }

  toggle(){
    this.showMenu = !this.showMenu;
  }


  public get value() : boolean {
    return this.showMenu;
  }

}
