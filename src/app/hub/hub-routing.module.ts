import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HubComponent } from './hub.component';

import { AuthGuard } from '@app/_helpers';

const routes: Routes = [{ path: '', component: HubComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HubRoutingModule { }
