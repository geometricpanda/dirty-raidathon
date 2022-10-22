import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';
import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser';

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient,
    private transferState: TransferState,
  ) {
  }

  private getPokemonStateKey(name: string): StateKey<Pokemon> {
    return makeStateKey<Pokemon>(`pokemon-${name}`);
  }

  getPokemon(name: string): Observable<Pokemon> {
    const stateKey = this.getPokemonStateKey(name);
    const pokemon = this.transferState.get(stateKey, null);

    return pokemon
      ? of(pokemon)
      : this.httpClient
        .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .pipe(tap(pokemon => this.transferState.set(stateKey, pokemon)));
  }

}
