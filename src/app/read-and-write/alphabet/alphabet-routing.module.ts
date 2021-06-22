import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetComponent } from './alphabet.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: AlphabetComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AlphabetRoutingModule {
  static components = [AlphabetComponent];
}
