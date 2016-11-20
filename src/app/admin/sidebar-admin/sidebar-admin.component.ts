import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelected(input: string){
    switch (input){
      case "upImg":
        this.router.navigate(['/admin/uploadImages']);
            break;
      case 'preferences':
        this.router.navigate(['admin/adminPreferences']);
            break;
      case 'login':
        this.router.navigate(['admin/login'])
        break;
      case 'upVid':
        this.router.navigate(['admin/uploadVideos']);
            break;
      case 'editGal':
        this.router.navigate(['admin/editGallery']);
            break;
      default:
        this.router.navigate(['/admin/login'])
    }
  }

}
