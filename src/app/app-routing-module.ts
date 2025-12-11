import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';

const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'about',
    component: About
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
