import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedRoutingModule } from './core/shared-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
