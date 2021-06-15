import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathMultiplicationComponent } from './math-multiplication.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MathMultiplicationComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class MathMultiplicationRoutingModule {
  static components = [ MathMultiplicationComponent ];
}
