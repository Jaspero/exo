import {Component} from '@angular/core';

@Component({
  selector: 'exo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu = false;

  toggleMenu() {
    this.menu = !this.menu;
  }
}
