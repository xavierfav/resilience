import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Pokemon {
  id: string;
  value: string;
}

export interface PokemonGroup {
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @Input() categoriesInit: any[];
  @Output() categoryArray = new EventEmitter<any[]>();
  selectedOption: any[] = [];
  currentSelected: any[] = [];
  pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        {id: 'bulbasaur-0', value: 'Bulbasaur'},
        {id: 'oddish-1', value: 'Oddish'},
        {id: 'bellsprout-2', value: 'Bellsprout'}
      ]
    },
    {
      name: 'Water',
      pokemon: [
        {id: 'squirtle-3', value: 'Squirtle'},
        {id: 'psyduck-4', value: 'Psyduck'},
        {id: 'horsea-5', value: 'Horsea'}
      ]
    },
    {
      name: 'Fire',
      pokemon: [
        {id: 'charmander-6', value: 'Charmander'},
        {id: 'vulpix-7', value: 'Vulpix'},
        {id: 'flareon-8', value: 'Flareon'}
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        {id: 'mew-9', value: 'Mew'},
        {id: 'mewtwo-10', value: 'Mewtwo'},
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('get values of categories from db :', this.categoriesInit);
    this.categoriesInit.forEach((category) => {
      this.selectedOption.push(category.id);
    });
    console.log('valueof preselect : ', this.selectedOption);
  }
    
    
  onSelect(event) {
    console.log(event);
    this.currentSelected = [event.value];
    console.log(this.currentSelected);
  }

  forwardCategories(event) {
    if (event == false) {
      this.categoryArray.emit(this.currentSelected);
      console.log(this.currentSelected);
    }
  }
}
