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
  height = window.innerHeight;
  scrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    console.log(window.pageYOffset, this.height);
    if ($event > this.height) {
      console.log('if');
    } else {
      console.log('else');
    }
  }

  toggleMenu() {
    this.menu = !this.menu;
    this._document.body.classList.toggle('of-hidden');
  }

  ngOnInit() {
    console.log(this.height);
  }
}
