import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exo-nail-bar',
  templateUrl: './nail-bar.component.html',
  styleUrls: ['./nail-bar.component.scss']
})
export class NailBarComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
  }
}
