import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHeroe?: Hero;
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  onSelect(heroe: Hero): void{
    this.selectedHeroe=heroe;
    this.messageService.add(`Heroe: ${heroe.name} (id: ${heroe.id})`);
  }
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes=> this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
