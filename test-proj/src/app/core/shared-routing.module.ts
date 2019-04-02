import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared.module';

const sharedRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sharedRoutes),
    SharedModule
  ],
  exports: []
})
export class SharedRoutingModule { }
