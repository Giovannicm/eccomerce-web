import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
