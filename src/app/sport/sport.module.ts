import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportRoutingModule } from './sport-routing.module';

@NgModule({
  declarations: [ SportRoutingModule.components ],
  imports: [
    CommonModule,
    SportRoutingModule
  ]
})

export class SportModule { }
