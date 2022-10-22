import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta} from '@angular/platform-browser';
import {map, Observable} from 'rxjs';
import {Pokemon} from '../../../services/pokemon.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  pokemons: Observable<Array<Pokemon>> = this
    .route
    .data
    .pipe(map(({pokemons}) => pokemons));

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
  ) {
  }

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content: 'Some random Pokemon Jim found on the internet for the Claw Raidathon #2',
    });
  }

}
