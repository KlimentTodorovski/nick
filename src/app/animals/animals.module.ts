import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsRoutingModule} from './animals-routing.module';

@NgModule({
  declarations: [ AnimalsRoutingModule.components ],
  imports: [
    CommonModule,
    AnimalsRoutingModule
  ]
})

export class AnimalsModule { }
