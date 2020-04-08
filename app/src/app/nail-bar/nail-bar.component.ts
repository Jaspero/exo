import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';

@Component({
  selector: 'exo-nail-bar',
  templateUrl: './nail-bar.component.html',
  styleUrls: ['./nail-bar.component.scss']
})
export class NailBarComponent implements OnInit {
  constructor(
    private scully: ScullyRoutesService
  ) {}

  ngOnInit() {
    this.scully.available$.subscribe(value => {
      console.log('all', value)
    });
    this.scully.getCurrent().subscribe(value => {
      console.log('value', value);
    })
  }
}
