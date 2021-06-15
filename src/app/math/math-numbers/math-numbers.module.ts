import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathNumbersRoutingModule } from './math-numbers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MathNumbersRoutingModule.components
  ],
  imports: [
    CommonModule,
    MathNumbersRoutingModule,
    SharedModule
  ]
})

export class MathNumbersModule { }
