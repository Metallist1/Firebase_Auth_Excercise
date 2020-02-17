import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './shared/admin-services/_firebase-services/_guard/firebase.authentication.guard';

import { AdminComponent } from './admin-page/admin-login/admin.component';
import { AdminMainComponent } from './admin-page/admin-main/admin-main-page.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'admin-main', component: AdminMainComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
