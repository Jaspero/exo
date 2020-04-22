import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'exo-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  item: any;

  ngOnInit() {
    this.item = this.route.snapshot.data.meta;
  }
}
