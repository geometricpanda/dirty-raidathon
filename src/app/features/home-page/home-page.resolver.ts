import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable, zip} from 'rxjs';
import {Pokemon, PokemonService} from '../../services/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class HomePageResolver implements Resolve<Array<Pokemon>> {
  constructor(private pokemonService: PokemonService) {
  }

  resolve(): Observable<Array<Pokemon>> {
    return zip([
      this.pokemonService.getPokemon('arceus'),
      this.pokemonService.getPokemon('dialga'),
      this.pokemonService.getPokemon('eevee'),
      this.pokemonService.getPokemon('eternatus'),
      this.pokemonService.getPokemon('jolteon'),
      this.pokemonService.getPokemon('oddish'),
      this.pokemonService.getPokemon('pikachu'),
      this.pokemonService.getPokemon('reshiram'),
      this.pokemonService.getPokemon('solgaleo'),
      this.pokemonService.getPokemon('xerneas'),
    ]);
  }

}
