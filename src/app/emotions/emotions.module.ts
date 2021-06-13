import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmotionRoutingModule } from './emotions-routing.module';
import { EmotionQuestionsComponent } from './emotion-questions/emotion-questions.component';

@NgModule({
    declarations: [EmotionRoutingModule.components, EmotionQuestionsComponent],
    imports: [
        CommonModule,
        EmotionRoutingModule
    ]
})

export class EmotionModule { }
