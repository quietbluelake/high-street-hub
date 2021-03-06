import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'hub', loadChildren: () => import('./hub/hub.module').then(m => m.HubModule) }, { path: 'creator', loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule) }, { path: 'explorer', loadChildren: () => import('./explorer/explorer.module').then(m => m.ExplorerModule) }, { path: 'library', loadChildren: () => import('./library/library.module').then(m => m.LibraryModule) }, { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
