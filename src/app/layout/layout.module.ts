import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../core/header/header.module';
import { HomeModule } from '../modules/home/home.module';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
  ]
})
export class LayoutModule { }
