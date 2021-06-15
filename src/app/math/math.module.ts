import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathRoutingModule } from './math-routing.module';

@NgModule({
  declarations: [
    MathRoutingModule.components
  ],
  imports: [
    CommonModule,
    MathRoutingModule
  ]
})

export class MathModule { }
