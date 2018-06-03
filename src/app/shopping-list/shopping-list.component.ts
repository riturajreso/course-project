import { Component, OnInit } from '@angular/core';
import { Ingredent } from '../shared/ingredent.modal';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	ingredents: Ingredent[] = [
		new Ingredent('Apple',3),
		new Ingredent('Banana',6),
		new Ingredent('Pine-Apple',1),
	];

  constructor() { }

  ngOnInit() {
  }

  onIngredentAdded(ingredent: Ingredent)
  {
    this.ingredents.push(ingredent);
  }
}
