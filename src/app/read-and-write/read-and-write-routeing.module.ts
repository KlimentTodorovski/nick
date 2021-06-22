import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReadAndWriteComponent } from './read-and-write.component';

const routes: Routes = [
  {
    path: '',
    component: ReadAndWriteComponent,
    children: [
      {
        path: 'training',
        loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)
      },
      {
        path: 'alphabet',
        loadChildren: () => import('./alphabet/alphabet.module').then(m => m.AlphabetModule)
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ReadAndWriteRouteingModule {
  static components = [ReadAndWriteComponent];
}
