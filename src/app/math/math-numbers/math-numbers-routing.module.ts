import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathNumbersComponent } from './math-numbers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MathNumbersComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class MathNumbersRoutingModule {
  static components = [ MathNumbersComponent ];
}
