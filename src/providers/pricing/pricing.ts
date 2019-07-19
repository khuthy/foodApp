import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PricingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface Foo {
  id: number;
  image: string;
}
@Injectable()
export class PricingProvider {

  total: number = 0;
  item: number = 1;
  addcart: any[];
  constructor(public http: Http) {
    console.log('Hello PricingProvider Provider');
  }

incrementItem() {
  this.item++;
}

decrementItem() {
  if(this.item == 0){
    this.item = 1;
  }else {
    this.item--;
  }
  
}



   setPrice(tag: number) {
  return this.total += (tag * this.item);
 }

  
  getPrice() {
    return this.total;
  }
  getItem(){
    return this.item;
  }
}
