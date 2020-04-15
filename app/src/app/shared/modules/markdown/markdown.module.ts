import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MarkdownToHtmlPipe} from './markdown-to-html.pipe';

@NgModule({
  declarations: [MarkdownToHtmlPipe],
  exports: [MarkdownToHtmlPipe],
  imports: [
    CommonModule,
  ]
})
export class MarkdownModule { }
