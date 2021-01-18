import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubRoutingModule } from './hub-routing.module';
import { HubComponent } from './hub.component';
import { ActionsComponent } from './actions/actions.component';
import { WikiComponent } from './wiki/wiki.component';


@NgModule({
  declarations: [HubComponent, ActionsComponent, WikiComponent],
  imports: [
    CommonModule,
    HubRoutingModule
  ]
})
export class HubModule { }
