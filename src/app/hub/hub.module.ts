import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubRoutingModule } from './hub-routing.module';
import { HubComponent } from './hub.component';


@NgModule({
  declarations: [HubComponent],
  imports: [
    CommonModule,
    HubRoutingModule
  ]
})
export class HubModule { }
