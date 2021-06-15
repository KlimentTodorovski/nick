import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MathAdditionComponent } from './math-addition.component';
import { QuestionsComponent } from 'src/app/shared/questions/questions.component';

const routes: Routes = [
  {
    path: '',
    component: MathAdditionComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class MathAdditionRoutingModule {
  static components = [ MathAdditionComponent ];
}
