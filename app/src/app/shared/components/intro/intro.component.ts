import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'exo-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor() { }

  @Input()
  data: {
    showcaseTitle: string;
    showcaseSubTitle?: string;
    showcaseBackground: string;
  };

  ngOnInit() {
  }

}
