import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'exo-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class ShopComponent implements OnInit {
  constructor(private scully: ScullyRoutesService) {}

  product = [
    {
      detail: 'Length: 74cm'
    },
    {
      detail: 'Regular fit'
    },
    {
      detail: 'Notched lapels'
    },
    {
      detail: 'Twin button front fastening'
    },
    {
      detail: 'Front patch pockets; chest pocket'
    },
    {
      detail: 'Internal pockets'
    },
    {
      detail: 'Centre-back vent'
    },
    {
      detail: 'Please refer to the garment for care instructions'
    },
    {
      detail: 'Length: 74cm'
    },
    {
      detail:
        'Material: Outer: 50% Linen & 50% Polyamide; Body Lining: 100% Cotton; Lining: 100% Acetate'
    }
  ];
  item: any;

  viewMode = 'tab1';



  ngOnInit() {
    this.scully.getCurrent().subscribe(value => {
      this.item = value;
    });
  }
}
