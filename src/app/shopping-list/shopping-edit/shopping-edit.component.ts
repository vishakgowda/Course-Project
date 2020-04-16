import { Component, OnInit, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:true}) nameInputref:ElementRef
  @ViewChild('amountInut',{static:true}) amountnputref:ElementRef
  @Output() inggredietAdded = new EventEmitter <Ingredient>();

  constructor() { }

  ngOnInit() {
  }
onaddItem(){
  const ingName = this.nameInputref.nativeElement.value;
  const ingAmount = this.amountnputref.nativeElement.value;
  const newIngredient = new Ingredient(ingName, ingAmount)
  this.inggredietAdded.emit(newIngredient)
}
}
