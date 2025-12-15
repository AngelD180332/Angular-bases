import { Component, OnInit } from '@angular/core';
import { Data } from '../../service/data';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit{
  constructor(private dataService: Data ){}
    ngOnInit(){
      this.dataService.getPosts().subscribe( posts => 
        {
          console.log(posts);
        }
      );

    }
}
