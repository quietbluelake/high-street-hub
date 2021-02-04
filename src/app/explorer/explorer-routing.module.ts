import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorerComponent } from './explorer.component';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [{ path: '', component: ExplorerComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorerRoutingModule { }
