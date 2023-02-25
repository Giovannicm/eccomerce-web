import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Route, RouterModule } from '@angular/router';
import { TitleSectionModule } from 'src/app/core/title-section/title-section.module';
import { TitleSectionComponent } from '../../core/title-section/title-section.component';
import { HomeComponent } from './home.component';

const homeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    TitleSectionModule
  ],
})
export class HomeModule { }
