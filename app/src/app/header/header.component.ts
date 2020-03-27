import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: boolean;

  toggleMenu() {
    this.menu = !this.menu;
  }


  constructor() { }

  ngOnInit() {
    this.menu = false;
  }

}
