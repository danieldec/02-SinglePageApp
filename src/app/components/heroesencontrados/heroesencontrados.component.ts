import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroesencontrados',
  templateUrl: './heroesencontrados.component.html',
  styleUrls: ['./heroesencontrados.component.css']
})
export class HeroesencontradosComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute, private _heroesServices: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes( params['termino'] );
    });
  }

}
