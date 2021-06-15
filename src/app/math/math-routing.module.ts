import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MathComponent } from './math.component';

const routes: Routes = [
  {
    path: '',
    component: MathComponent,
    children: [
      {
        path: 'numbers',
        loadChildren: () => import('../math/math-numbers/math-numbers.module').then(m => m.MathNumbersModule)
      },
      {
        path: 'addition',
        loadChildren: () => import('../math/math-addition/math-addition.module').then(m => m.MathAdditionModule)
      },
      {
        path: 'substraction',
        loadChildren: () => import('../math/math-subtraction/math-subtraction.module').then(m => m.MathSubtractionModule)
      },
      {
        path: 'multiplication',
        loadChildren: () => import('../math/math-multiplication/math-multiplication.module').then(m => m.MathMultiplicationModule)
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
    MathComponent
  ];
}
