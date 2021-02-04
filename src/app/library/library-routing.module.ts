import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [{ path: '', component: LibraryComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
