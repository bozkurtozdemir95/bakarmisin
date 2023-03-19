import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {TranslateModule} from "@ngx-translate/core";
import {CountInputComponent} from "../../components/count-input/count-input.component";
import {FooterModule} from "../../components/footer/footer.module";
import {HeaderModule} from "../../components/header/header.module";
import {CountInputModule} from "../../components/count-input/count-input.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
    FooterModule,
    HeaderModule,
    CountInputModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}
