import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
   { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.routes.').then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
      },
    //   {
    //     path: 'trades',
    //     loadChildren: () =>
    //       import('./features/trades/trades.routes').then(m => m.TRADES_ROUTES)
    //   },
      {
        path: 'journal',
        loadChildren: () =>
          import('./features/journal/pages/journal/journal.routes').then(m => m.JOURNAL_ROUTES)
      }
    ]
  }





];
