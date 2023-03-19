import {Component, OnInit} from '@angular/core';
import products from '../../constants/products';
import {ModalService} from "../../services/modal.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories = [
    "all", "starters", "main_dishes", "pizza", "deserts", "hot_drinks", "beverages"
  ];
  activeCategory = this.categories[1];
  products: any;
  filteredProducts: any = [];

  isModalOpen = false;
  activeItem: any;

  constructor(public modal: ModalService, public cart: CartService) {
    this.getProducts();
  }

  ngOnInit() {
  }

  productSelected(event: any, item: any) {
    event.target.checked ? item.selected = true : item.selected = false;
  }

  changeCategory(item: string) {
    this.activeCategory = item;
    this.filteredProducts = [];
    this.products.find((e: any) => {
      if (this.activeCategory === "all") {
        this.filteredProducts = this.products;
      } else if (e.category === this.activeCategory) {
        this.filteredProducts.push(e);
      }
    })
  }

  getProducts() {
    this.products = Object.values(products.reduce((c, {category, data}) => {
      c[category] = c[category] || {category, data: []};
      c[category].data.push(data);
      return c;
    }, {}));
    this.filteredProducts = this.products;
  }

  addToCart() {
    this.cart.add(this.activeItem);
    this.closeModal();
  }

  closeModal() {
    this.isModalOpen = false;
    this.activeItem = {};
  }

  openModal(item: any) {
    this.activeItem = item;
    this.activeItem.count = 1;
    this.isModalOpen = true;
  }
}
