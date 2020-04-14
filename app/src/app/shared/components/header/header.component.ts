import {Component} from '@angular/core';
import {StateService} from '../../services/state/state.service';

@Component({
  selector: 'exo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public state: StateService) {}

  menu = false;

  toggleMenu() {
    this.menu = !this.menu;
  }
}
