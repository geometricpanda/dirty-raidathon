import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {CacheHeadersGuard} from './guards';

const home: Route = {
  path: '',
  pathMatch: 'full',
  canActivate: [CacheHeadersGuard],
  loadChildren: () =>
    import('./features/home-page/home-page.module')
      .then(m => m.HomePageModule),
}

const routes: Routes = [
  home,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
