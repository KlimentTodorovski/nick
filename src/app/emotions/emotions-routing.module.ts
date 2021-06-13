import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsComponent } from './emotions.component';

const routes: Routes = [
    {
        path: '',
        component: EmotionsComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class EmotionRoutingModule {
    static components = [EmotionsComponent];
}
