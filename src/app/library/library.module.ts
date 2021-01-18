import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { OptionsComponent } from './options/options.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [LibraryComponent, OptionsComponent, FilterComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
