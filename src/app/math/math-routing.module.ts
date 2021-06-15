import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MathComponent } from './math.component';
import { MathNumbersComponent } from './math-numbers/math-numbers.component';
import { MathAdditionComponent } from './math-addition/math-addition.component';
import { MathSubtractionComponent } from './math-subtraction/math-subtraction.component';
import { MathMultiplicationComponent } from './math-multiplication/math-multiplication.component';

const routes: Routes = [
  {
    path: '',
    component: MathComponent,
    children: [
      {
        path: 'numbers',
        component: MathNumbersComponent
      },
      {
        path: 'addition',
        component: MathAdditionComponent
      },
      {
        path: 'substraction',
        component: MathSubtractionComponent
      },
      {
        path: 'multiplication',
        component: MathMultiplicationComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class MathRoutingModule {
  static components = [
    MathComponent,
    MathNumbersComponent,
    MathAdditionComponent,
    MathSubtractionComponent,
    MathMultiplicationComponent
  ];
}
