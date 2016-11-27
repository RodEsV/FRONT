import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css'],
})
export class CartviewComponent implements OnInit {

  @Input() credentials;
  constructor() { }

  ngOnInit() {
    console.log("credentials ", this.credentials)
  }

}
