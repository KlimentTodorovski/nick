import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsAnswersComponent } from './emotions-answers.component';

const routes: Routes = [
  {
    path: '',
    component: EmotionsAnswersComponent
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class EmotionsAnswersRoutingModule {
  static components = [  EmotionsAnswersComponent ];
}
