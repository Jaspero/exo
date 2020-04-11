import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-image-r-block',
  templateUrl: './image-r-block.component.html',
  styleUrls: ['./image-r-block.component.scss']
})
export class ImageRBlockComponent implements OnInit {
  constructor() { }

  data: any;

  ngOnInit() {
    console.log(222, this.data);
  }

}
