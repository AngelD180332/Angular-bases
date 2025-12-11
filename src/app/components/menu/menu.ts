import { Component } from '@angular/core';
import path from 'path';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

rutas = [
    {
      name:'Home',
      path: '/home'
    },
    {
      name:'About',
      path: '/about'
    },
    {
      name:'Contact',
      path: '/contact'
    },
     {
      name:'Posts',
      path: '/posts'
    }
    

];




}
