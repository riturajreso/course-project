import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import {Ingredent} from '../../shared/ingredent.modal';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredentAdded = new EventEmitter<Ingredent>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem()
  {
  	const ingName = this.nameInputRef.nativeElement.value;
  	const ingAmount = this.amountInputRef.nativeElement.value;
  	const newIngredent = new Ingredent(ingName,ingAmount);
  	this.ingredentAdded.emit(newIngredent);
  }
  onClearItem()
  {
  	this.nameInputRef.nativeElement.value = '';
  	this.amountInputRef.nativeElement.value = '';
  }
}
