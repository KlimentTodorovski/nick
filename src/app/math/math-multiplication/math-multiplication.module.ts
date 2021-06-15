import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathMultiplicationRoutingModule } from './math-multiplication-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MathMultiplicationRoutingModule.components
  ],
  imports: [
    CommonModule,
    MathMultiplicationRoutingModule,
    SharedModule
  ]
})

export class MathMultiplicationModule { }
