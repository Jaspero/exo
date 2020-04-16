import {Injectable} from '@angular/core';

interface IElement {
  element: HTMLElement;
  callback: () => void;
  intersectionRatio: number;
}

@Injectable()
export class IntersectionService {
  supported: boolean;
  observer: IntersectionObserver;
  elements: Array<IElement> = [];

  initialize(
    options = {
      rootMargin: '0px',
      threshold: [0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.99]
    }
  ) {
    this.supported = 'IntersectionObserver' in window;

    if (this.supported) {
      this.observer = new IntersectionObserver(
        entries => this.onIntersecton(entries),
        options
      );
    }
  }

  add(el: IElement) {
    if (this.supported) {
      this.observer.observe(el.element);
      this.elements.push(el);
    } else {
      el.callback();
    }
  }

  private onIntersecton(entries: any) {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio <= 0) {
        return;
      }

      const elIndex = this.elements.findIndex(
        el => el.element === entry.target
      );

      if (elIndex !== -1) {
        const {intersectionRatio, callback} = this.elements[elIndex];

        if (entry.intersectionRatio >= intersectionRatio) {
          callback();
          this.elements.splice(elIndex, 1);
          this.observer.unobserve(entry.target);
        }
      }
    });
  }
}
