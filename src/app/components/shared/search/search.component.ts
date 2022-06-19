import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	heroesEncontrados:any[] = [];

	constructor(private _heroesService: HeroesService,
				private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			this.heroesEncontrados = this._heroesService.buscarHeroes(params['termino']);
		})
	}

}
