import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomePageResolver} from './home-page.resolver';

const home: Route = {
  path: '',
  title: 'Some Pokemon',
  component: HomeComponent,
  resolve: {
    pokemons: HomePageResolver,
  },
}

const routes: Routes = [
  home,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {
}
