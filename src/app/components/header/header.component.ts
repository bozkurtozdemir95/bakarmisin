import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() isBackButton: boolean | any;
  @Input() title: string | any;

  constructor(private router: Router, public cart: CartService) { }

  ngOnInit() {}

  goBack(){
    this.router.navigate(['/'])
  }

}
