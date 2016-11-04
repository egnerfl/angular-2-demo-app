import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule {
}
