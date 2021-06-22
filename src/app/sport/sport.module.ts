import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportRoutingModule } from './sport-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ SportRoutingModule.components ],
  imports: [
    CommonModule,
    SportRoutingModule,
    SharedModule
  ]
})

export class SportModule { }
