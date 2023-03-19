import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = [];
  total: number = 0;

  constructor() {
  }

  add(item: any) {
    this.cart.push(item);
    localStorage.setItem('cart', this.cart);
    console.log(this.cart);
  }

  getTotalPrice() {
    for (let i = 0; i < this.cart.length; i++) {
      console.log(this.cart[i].price);
      this.total += this.cart[i].price;
    }
    console.log(this.total);
  }
}
