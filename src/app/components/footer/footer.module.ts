import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterComponent } from './footer.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink
  ],
  exports: [
    FooterComponent
  ],
  declarations: [FooterComponent]
})
export class FooterModule {}
