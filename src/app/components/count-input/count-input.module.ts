import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountInputComponent } from './count-input.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    CountInputComponent
  ],
  declarations: [CountInputComponent]
})
export class CountInputModule {}
