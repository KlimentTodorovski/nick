import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathAdditionRoutingModule } from './math-addition-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MathAdditionRoutingModule.components
  ],
  imports: [
    CommonModule,
    MathAdditionRoutingModule,
    SharedModule
  ]
})

export class MathAdditionModule { }
