import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  showProductModal = false;

  constructor() {
  }

  toggleProductModal(){
    this.showProductModal = !this.showProductModal;
  }
}
