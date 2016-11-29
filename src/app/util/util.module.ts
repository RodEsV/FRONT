import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilComponent } from './util.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UtilComponent, LoginFormComponent]
})
export class UtilModule { }
