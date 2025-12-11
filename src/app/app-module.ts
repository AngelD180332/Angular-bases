import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
//import { About } from './pages/about/about';
//import { Contact } from './pages/contact/contact';
//import { Home } from './pages/home/home';
import { Menu } from './components/menu/menu';
import { PagesModule } from './pages/pages-module';

@NgModule({
  declarations: [
    App,
  // About,
  // Contact,
  // Home,
    Menu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
