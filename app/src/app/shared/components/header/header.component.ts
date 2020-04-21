import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  OnInit
} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'exo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document: Document) {}

  menu = false;
  scrolled = false;
  height: number;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    this.scrolled = window.pageYOffset >= this.height;
  }

  toggleMenu() {
    this.menu = !this.menu;
    this._document.body.classList.toggle('of-hidden');
  }

  ngOnInit() {
    this.height = window.innerHeight;
  }
}
