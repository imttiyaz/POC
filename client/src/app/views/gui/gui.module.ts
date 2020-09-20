// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilesearchComponent } from './filesearch.component';
import { RestrictedfilesComponent } from './restrictedfiles.component';
import { CustomersaccountsComponent } from './customersaccounts.component';
import { UserserialnumberComponent } from './userserialnumber.component';
import { OverridesinglefileComponent } from './overridesinglefile.component';



// Theme Routing
import { GuiRoutingModule } from './gui-routing.module';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    GuiRoutingModule
  ],
  declarations: [
    FilesearchComponent,
    RestrictedfilesComponent,
    CustomersaccountsComponent,
    UserserialnumberComponent,
    OverridesinglefileComponent

  ]
})
export class GuiModule { }
