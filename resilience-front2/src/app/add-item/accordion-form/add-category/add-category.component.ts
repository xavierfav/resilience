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

  // WIP- reactive form for category
  pokemonControl = new FormControl();
  // WIP hardcoded data for category
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

  // on init, get the categories from db (from add-item) and push them to the view
  ngOnInit() {
    this.categoriesInit.forEach((category) => {
      this.selectedOption.push(category.id);
    });
  }
    
  // get value of the select when clicking one or many options
  onSelect(event) {
    this.currentSelected = [event.value];
  }

  // send category object to accordion-form when closing the overlay
  forwardCategories(event) {
    if (event == false) {
      this.categoryArray.emit(this.currentSelected);
    }
  }
}
