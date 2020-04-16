import {Component, OnInit} from '@angular/core';
import {IntersectionService} from '../../intersecting/intersection.service';

@Component({
  selector: 'exo-image-r-block',
  providers: [IntersectionService],
  templateUrl: './image-r-block.component.html',
  styleUrls: ['./image-r-block.component.scss']
})
export class ImageRBlockComponent implements OnInit {
  constructor(private intersectionService: IntersectionService) {}

  data: any;
  noImg: boolean;

  ngOnInit() {
    this.intersectionService.initialize();
  }
}
