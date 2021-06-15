import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathSubtractionRoutingModule } from './math-subtraction-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MathSubtractionRoutingModule.components
  ],
  imports: [
    CommonModule,
    MathSubtractionRoutingModule,
    SharedModule
  ]
})

export class MathSubtractionModule { }
