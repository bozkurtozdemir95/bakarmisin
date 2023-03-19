import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {HomePage} from "../home/home.page";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  component = HomePage;
  constructor(public cart: CartService) { }

  ngOnInit() {
    this.cart.getTotalPrice();
  }


}
