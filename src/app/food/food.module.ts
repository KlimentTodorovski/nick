import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './food-routing.module';

@NgModule({
  declarations: [ FoodRoutingModule.components ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})

export class FoodModule { }
