import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(page: string){
    switch (page) {
      case "photos":
        this.router.navigate(['/photos'])
        break;
      case "videos":
        this.router.navigate(['/videos'])
        break;
      case "categories":
        this.router.navigate(['/categories'])
        break
      default:
        break;
    }
    /*
    if (page == 'photos'){
      this.router.navigate(['/photos']);
    }
    */
  }

}
