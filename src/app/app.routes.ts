import { Routes } from '@angular/router';
import { NotFoundComponent } from './layout/error/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { ServerErrorComponent } from './layout/error/server-error/server-error.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
