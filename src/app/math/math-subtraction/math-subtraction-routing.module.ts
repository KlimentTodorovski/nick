import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathSubtractionComponent } from './math-subtraction.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MathSubtractionComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class MathSubtractionRoutingModule {
  static components = [ MathSubtractionComponent ];
}
