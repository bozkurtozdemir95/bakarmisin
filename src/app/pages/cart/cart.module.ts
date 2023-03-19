import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import {FooterModule} from "../../components/footer/footer.module";
import {HeaderModule} from "../../components/header/header.module";
import {TranslateModule} from "@ngx-translate/core";
import {CountInputModule} from "../../components/count-input/count-input.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    FooterModule,
    HeaderModule,
    TranslateModule,
    CountInputModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
