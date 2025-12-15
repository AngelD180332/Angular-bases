import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './components/menu/menu';
import { PagesModule } from './pages/pages-module';

@NgModule({
  declarations: [
    App,
    Menu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()) // ← Agrega esto en providers

  ],
  bootstrap: [App]
})
export class AppModule { }