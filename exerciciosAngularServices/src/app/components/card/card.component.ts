import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  pokemon:PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  }
  attributesTypes: string[] = ['FIRE', 'ROCK', 'WATER'];

  constructor(private service: PokemonServiceService) {}

  ngOnInit(): void {
    this.getPokemon("pikachu");
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      },
      error: (err) => console.log("Not found")
    });
  }
}
