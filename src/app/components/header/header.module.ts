import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule {}
