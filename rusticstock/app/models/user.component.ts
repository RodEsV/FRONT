import {Component} from '@angular/core';

@Component({
  selector: 'user-comp',
  template: ``,
  styles: []
})

export class UserComponent
{
  constructor(
    public email: string,
    public password: string)
  { }
}