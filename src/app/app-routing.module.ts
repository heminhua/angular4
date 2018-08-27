import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutingModule} from './components/home/home.routing.module';

import { HomeComponent } from './components/home/home.component';
import { Code404Component } from './components/code404/code404.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [
    HomeRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
