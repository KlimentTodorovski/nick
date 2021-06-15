import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionComponent,
    QuestionsComponent
  ]
})

export class SharedModule { }
