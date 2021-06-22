import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetRoutingModule } from './alphabet-routing.module';

@NgModule({
  declarations: [AlphabetRoutingModule.components],
  imports: [
    CommonModule,
    AlphabetRoutingModule
  ]
})

export class AlphabetModule { }
