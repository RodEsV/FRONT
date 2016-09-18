import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'menu-comp',
  templateUrl: 'menu.html',
  styleUrls: [ 'menu.css']
})

export class MenuComponent {
  constructor( private router: Router ){}
  onSelect(page: string){
    if (page == 'photos'){
      this.router.navigate(['/photos']);
    }
  }
}
