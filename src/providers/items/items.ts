import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../../models/item';

/*
  Generated class for the ItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemsProvider {
    items: Item[] = [];
    
    constructor(public http: HttpClient) {
    console.log('Hello ItemsProvider Provider');
  }

  addItem(item:Item){
    this.items.push(item); 
  }

  removeItem(item:Item){
    let index = this.items.indexOf(item);
    if (index>-1){
      this.items.splice(index, 1);  
    }
   
  }

}
