import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerRoutingModule } from './explorer-routing.module';
import { ExplorerComponent } from './explorer.component';
import { ModeSwitchComponent } from './mode-switch/mode-switch.component';


@NgModule({
  declarations: [ExplorerComponent, ModeSwitchComponent],
  imports: [
    CommonModule,
    ExplorerRoutingModule
  ]
})
export class ExplorerModule { }
