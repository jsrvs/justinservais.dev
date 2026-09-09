import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./portfolio/components/home/home') },
  { path: 'games/the-chameleon', loadComponent: () => import('./games/chameleon/components/placeholder/placeholder') },
  { path: '**', loadComponent: () => import('./shared/components/not-found/not-found') },
];
