import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'info-comp',
  templateUrl: 'info.html',
  styleUrls: ['info.css']
})

export class InfoComponent {
  constructor( private router: Router ){}
  onSelect(page: string)
  {
    if( page == 'about'){
      this.router.navigate(['/about']);
    }
    else if (page == 'contact'){
      this.router.navigate(['/contact']);
    }
  }
}
