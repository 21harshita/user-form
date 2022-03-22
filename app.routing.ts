import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { UserFormComponent } from './views/user-form/user-form.component';
import { DatatableComponent } from './views/datatable/datatable.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-form',
    pathMatch: 'full',
  },
  {
    path: 'user-form',
    component : UserFormComponent,
  },

  {
    path: 'datatable',
    component : DatatableComponent,
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      
    ]
  },
  { path: '**', component: DatatableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
