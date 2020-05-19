import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject, OnDestroy,
  OnInit
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'exo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  menu = false;
  scrolled = false;
  height: number;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrolled = window.pageYOffset >= this.height;
  }

  toggleMenu() {
    this.menu = !this.menu;
    this.document.body.classList.toggle('of-hidden');
  }

  goHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.height = window.innerHeight - 60;
  }

  ngOnDestroy() {
    this.document.body.classList.remove('of-hidden');
  }
}
