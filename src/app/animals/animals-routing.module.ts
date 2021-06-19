import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsComponent
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class AnimalsRoutingModule {
  static components = [ AnimalsComponent ];
}
