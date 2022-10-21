import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () =>
    import('./features/home-page/home-page.module')
      .then(m => m.HomePageModule),
}

const routes: Routes = [
  home,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
