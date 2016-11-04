import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StaticRouteComponent} from './static-route.component';
import {Routes} from '@angular/router';

export const staticRoutes: Routes = [
  {path: '', component: StaticRouteComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StaticRouteComponent]
})
export class StaticRouteModule {
}
