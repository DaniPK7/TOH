import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  selectedHeroe?: Hero;
  onSelect(heroe: Hero): void{
    this.selectedHeroe=heroe;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }

}
