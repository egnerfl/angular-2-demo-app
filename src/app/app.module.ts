import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {staticRoutes, StaticRouteModule} from './static-route/static-route.module';
import {ComponentRouteComponent} from './component-route/component-route.component';
import {ComponentRouteModule} from './component-route/component-route.module';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', loadChildren: 'app/welcome/welcome.module#WelcomeModule'},
  {path: 'componentRoute', component: ComponentRouteComponent},
  {path: 'staticRoute', children: staticRoutes},
  {path: 'lazyRoute', loadChildren: 'app/lazy-route/lazy-route.module#LazyRouteModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StaticRouteModule,
    ComponentRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
