import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSectionComponent } from './title-section.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    TitleSectionComponent
    ],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  exports: [
    TitleSectionComponent
  ]
})
export class TitleSectionModule {}
