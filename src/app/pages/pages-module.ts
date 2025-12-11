import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';



@NgModule({
  declarations: [
    Home,
    About,
    Contact
  ],
  exports: [
    Home,
    About,
    Contact
  ],

  imports: [
    CommonModule
  ]
})
export class PagesModule { }
