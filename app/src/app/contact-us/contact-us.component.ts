import {HttpClient} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'exo-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  exo = {
    services: [
      {
        name: 'EXO Lounge',
        key: 'lounge'
      },
      {
        name: 'EXO Nail Bar',
        key: 'nailBar'
      }
    ],
    days: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ]
  };

  page: any;

  mapSrc: SafeResourceUrl;
  form: FormGroup;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.mapSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?ll=' + this.page.address.lat + ',' + this.page.address.lng + '&z=17&ie=UTF8&iwloc&output=embed'
    );
  }

  submit() {
    return () =>
      this.http.post(
        '/api/contact',
        this.form.getRawValue()
      )
        .pipe(
          tap(() => {
            this.form.reset();
          })
        )
  }
}
