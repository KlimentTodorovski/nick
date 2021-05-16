import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsRoutingModule } from './colors-routing.module';

@NgModule({
  declarations: [ ColorsRoutingModule.components ],
  imports: [
    CommonModule,
    ColorsRoutingModule
  ]
})

export class ColorsModule { }
