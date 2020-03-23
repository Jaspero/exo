import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  links = {
    backgrounds:  [
      {
        name: 'Events',
        background: 'assets/images/home/home-3.png'
      },
      {
        name: 'Blog',
        background: 'assets/images/home/home-4.png'
      },
      {
        name: 'News & Press',
        background: 'assets/images/home/home-5.png'
      }
    ]
  }

  ngOnInit(): void {
  }
}
