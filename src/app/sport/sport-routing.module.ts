import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './sport.component';

const routes: Routes = [
  {
    path: '',
    component: SportComponent
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class SportRoutingModule {
  static components = [ SportComponent ];
}
