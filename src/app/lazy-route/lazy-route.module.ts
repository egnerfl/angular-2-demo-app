import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyRouteComponent} from './lazy-route.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', component: LazyRouteComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyRouteComponent]
})
export class LazyRouteModule {
}
