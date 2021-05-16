import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReadAndWriteComponent } from './read-and-write.component';

const routes: Routes = [
  {
    path: '',
    component: ReadAndWriteComponent
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class ReadAndWriteRouteingModule {
  static components = [ ReadAndWriteComponent ];
}
