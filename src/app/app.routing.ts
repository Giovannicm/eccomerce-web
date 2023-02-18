import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then((h) => h.HomeModule),
      },
      {
        path: 'salgados',
        loadChildren: () =>
          import('src/app/modules/salgados/salgados.module').then(
            (h) => h.SalgadosModule
          ),
      },
    ],
  },
];
