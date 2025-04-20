import { Routes } from '@angular/router';
import { NotFoundComponent } from './layout/error/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
