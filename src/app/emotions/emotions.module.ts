import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmotionRoutingModule } from './emotions-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [EmotionRoutingModule.components],
    imports: [
        CommonModule,
        EmotionRoutingModule,
        SharedModule
    ]
})

export class EmotionModule { }
