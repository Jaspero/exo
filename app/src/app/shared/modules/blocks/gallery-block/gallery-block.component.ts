import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'exo-gallery-block',
  templateUrl: './gallery-block.component.html',
  styleUrls: ['./gallery-block.component.scss']
})
export class GalleryBlockComponent {
  data: any;

  @ViewChild('widgetsContent', {static: false}) widgetsContent: ElementRef;

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 600;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 600;
  }
  ngOnInit() {
    console.log(this.widgetsContent);
  }
}
