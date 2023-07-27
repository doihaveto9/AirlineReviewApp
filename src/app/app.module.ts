import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { DataFormComponent } from './data-form/data-form.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';

import { loggedInGuard } from './logged-in.guard';

const appRoutes: Routes = [
  { path: 'log-in', component: LogInComponentComponent, data: {animation: 'Log-In Page'} },
  { path: 'sign-up', component: SignUpComponent, data: {animation: 'Sign-Up Page'}},
  { path: 'menu', component: MenuComponent, canActivate: [loggedInGuard], data: {animation: 'Menu Page'}},
  { path: 'data-form', component: DataFormComponent, canActivate: [loggedInGuard], data: {animation: 'Data Form Page'}},
  { path: '**', redirectTo: '/log-in'}
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponentComponent,
    DataFormComponent,
    SignUpComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
