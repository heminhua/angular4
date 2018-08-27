import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import {ContentComponent} from './content/content.component'
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path:'content',
        component: ContentComponent,
      },
      {
        path:'',
        component: ContentComponent,
      },
      {
        path:'test',
        component: TestComponent,
      },
     
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [TestComponent]
})
export class HomeRoutingModule { }
