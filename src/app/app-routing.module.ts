import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { DataFormComponent } from './data-form/data-form.component';

import { loggedInGuard } from './logged-in.guard';

const routes: Routes = [
  { path: 'log-in', component: LogInComponentComponent, data: {animation: 'Log-In Page'} },
  { path: 'sign-up', component: SignUpComponent, data: {animation: 'Sign-Up Page'}},
  { path: 'menu', component: MenuComponent, canActivate: [loggedInGuard], data: {animation: 'Menu Page'}},
  { path: 'data-form', component: DataFormComponent, canActivate: [loggedInGuard], data: {animation: 'Data Form Page'}},
  { path: '**', redirectTo: '/log-in'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
