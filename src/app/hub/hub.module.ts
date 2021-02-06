import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HubRoutingModule } from './hub-routing.module';
import { HubComponent } from './hub.component';
import { ActionsComponent } from './actions/actions.component';
import { WikiComponent } from './wiki/wiki.component';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HubComponent, ActionsComponent, WikiComponent],
  imports: [
    CommonModule,
    HubRoutingModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class HubModule { }
