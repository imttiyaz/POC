import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { FilesearchComponent } from './filesearch.component';
import {RestrictedfilesComponent } from './restrictedfiles.component';
import { CustomersaccountsComponent } from './customersaccounts.component';
import { UserserialnumberComponent } from './userserialnumber.component';
import { OverridesinglefileComponent } from './overridesinglefile.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'GUI Screen'
    },
    children: [
      {
        path: '',
        redirectTo: 'filesearch'
      },
      {
        path: 'filesearch',
        component: FilesearchComponent,
        data: {
          title: 'File Search'
        }
      },
      {
        path: 'restrictedfiles',
        component: RestrictedfilesComponent,
        data: {
          title: 'Restricted Files'
        }
      },
      {
        path: 'customersaccounts',
        component: CustomersaccountsComponent,
        data: {
          title: 'Customers / Accounts'
        }
      },
      {
        path: 'userserialnumber',
        component: UserserialnumberComponent,
        data: {
          title: 'User Serial Numbes'
        }
      },
      {
        path: 'overridesinglefile',
        component: OverridesinglefileComponent,
        data: {
          title: 'Override - Single File'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuiRoutingModule {}
