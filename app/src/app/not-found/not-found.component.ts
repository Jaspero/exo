import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'exo-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {}
