import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './creator.component';
import { ToolsComponent } from './tools/tools.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [CreatorComponent, ToolsComponent, SearchComponent],
  imports: [
    CommonModule,
    CreatorRoutingModule
  ]
})
export class CreatorModule { }
