import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors.component';

const routes: Routes = [
  {
    path: '',
    component: ColorsComponent
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class ColorsRoutingModule {
  static components = [ ColorsComponent ];
}
