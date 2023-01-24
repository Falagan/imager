import { Route } from '@angular/router';
import { APP_PATHS } from './configs/router.config';

export const APP_ROUTER: Route[] = [
  {
    path: APP_PATHS.AUTH,
    loadComponent: () => import('./modules/auth/auth.component').then((c) => c.AuthComponent),
    pathMatch: 'full',
  },
  {
    path: APP_PATHS.PRIVATE,
    loadComponent: () => import('./layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: APP_PATHS.SEARCHER,
        loadComponent: () => import('./modules/searcher/searcher.component').then((c) => c.SearcherComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: APP_PATHS.AUTH,
  },
];
