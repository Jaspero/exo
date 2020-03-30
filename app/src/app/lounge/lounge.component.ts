import {Component, OnInit} from '@angular/core';
// import {aboutAnimate} from '../animations';

@Component({
  selector: 'exo-about',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.scss']
  // animations: [aboutAnimate]
})
export class LoungeComponent implements OnInit {
  // animate = 'inactive';
  // toggleMove() {
  //   this.animate = (this.animate === 'inactive' ? 'active' : 'inactive');
  // }

  constructor() {}

  ngOnInit(): void {}
}
