import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalgadosComponent } from './salgados.component';
import { Route, RouterModule } from '@angular/router';
import { CardProductModule } from 'src/app/core/card-product/card-product.module';

const salgadosRoutes: Route[] = [
  {
    path: '',
    component: SalgadosComponent,
  },
];

@NgModule({
  declarations: [SalgadosComponent],
  imports: [RouterModule.forChild(salgadosRoutes), CardProductModule],
})
export class SalgadosModule {}
