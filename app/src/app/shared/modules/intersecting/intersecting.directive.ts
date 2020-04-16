import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';
import {IntersectionService} from './intersection.service';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[intersecting]'})
export class IntersectingDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private intersectionService: IntersectionService,
    private renderer: Renderer2
  ) {}

  @Input()
  intersecting = 0.75;

  ngAfterViewInit() {
    setTimeout(() => {
      this.intersectionService.add({
        element: this.el.nativeElement,
        callback: () => {
          this.render();
        },
        intersectionRatio: this.intersecting || 0
      });
    }, 100);
  }

  render() {
    this.renderer.addClass(this.el.nativeElement, 'animated');
  }
}
