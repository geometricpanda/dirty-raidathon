import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import {PokemonPipe} from './home/pokemon.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    PokemonPipe,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgOptimizedImage,
  ],
})
export class HomePageModule { }
