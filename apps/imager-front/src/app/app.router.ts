import { Route } from '@angular/router';
import { APP_PATHS } from './configs/router.config';

export const APP_ROUTER: Route[] = [
  {
    path: APP_PATHS.AUTH,
    loadComponent: () => import('./modules/auth/auth.component').then((c) => c.AuthComponent),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: APP_PATHS.AUTH,
  },
];
