import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe: any = {};
  hereoCasaLogo: string;
  MARVEL = 'Marvel';
  DC = 'DC';
  constructor(private activatedRoute: ActivatedRoute, private _heroesServices: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesServices.getHeroe(params['id']);
      if (this.heroe.casa === this.MARVEL) {
        this.hereoCasaLogo = 'assets/img/marvelLogo.jpg';
      } else if (this.heroe.casa === this.DC) {
        this.hereoCasaLogo = 'assets/img/DCLogo.jpg';
      }
    });
   }
   // ngOnInit() {
  // }

}

