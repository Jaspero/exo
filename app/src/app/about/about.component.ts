import { Component, OnInit } from '@angular/core';
import {aboutAnimate} from '../animations';


@Component({
  selector: 'exo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [aboutAnimate]
})
export class AboutComponent implements OnInit {
  animate = 'inactive';
  toggleMove() {
    this.animate = (this.animate === 'inactive' ? 'active' : 'inactive');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
