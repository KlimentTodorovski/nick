import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TrainingRoutingModule.components
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule
  ]
})

export class TrainingModule { }
