/**
 * Created by rodesv on 31/10/16.
 */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin', component: AdminComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: AdminLoginComponent }
        ]
      }
    ])
  ],
  exports: [ RouterModule ]
})

export class AdminRoutingModule {}
