import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'colors', loadChildren: () => import('./colors/colors.module').then(m => m.ColorsModule) },
  { path: 'food', loadChildren: () => import('./food/food.module').then(m => m.FoodModule) },
  { path: 'math', loadChildren: () => import('./math/math.module').then(m => m.MathModule) },
  { path: 'read-and-write', loadChildren: () => import('./read-and-write/read-and-write.module').then(m => m.ReadAndWriteModule) },
  { path: 'sport', loadChildren: () => import('./sport/sport.module').then(m => m.SportModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
