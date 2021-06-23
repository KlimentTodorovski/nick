import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentsComponent } from './parents.component';

const routes: Routes = [
  {
    path: '',
    component: ParentsComponent
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class ParentsRoutingModule {
  static components = [  ParentsComponent ];
}
