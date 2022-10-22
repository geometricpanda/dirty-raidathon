import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pokemon',
})
export class PokemonPipe implements PipeTransform {
  transform(value: number): string {
    return `https://raidathon.geometricpanda.dev/pokemon/${value}`;
  }
}
