import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HubRoutingModule } from './hub-routing.module';
import { HubComponent } from './hub.component';
import { ActionsComponent } from './actions/actions.component';
import { WikiComponent } from './wiki/wiki.component';


@NgModule({
  declarations: [HubComponent, ActionsComponent, WikiComponent],
  imports: [
    CommonModule,
    HubRoutingModule,
    RouterModule
  ]
})
export class HubModule { }
