import { Routes } from '@angular/router';
import { NotFoundComponent } from './layout/error/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { ServerErrorComponent } from './layout/error/server-error/server-error.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectDetailsComponent } from './pages/project/project-details/project-details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
  },
  {
    path: 'blogs',
    component: BlogComponent,
  },
  {
    path: 'blogs/:id',
    component: BlogDetailsComponent,
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
