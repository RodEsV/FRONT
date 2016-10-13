import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor( private router: Router) { }

  onSelect(page: string)
  {
    if( page == 'about'){
      this.router.navigate(['/about']);
    }
    else if (page == 'contact'){
      this.router.navigate(['/contact']);
    }
    else if (page == 'cart'){
      this.router.navigate(['/cart']);
    }
  }

  ngOnInit(){
    
  }

}
