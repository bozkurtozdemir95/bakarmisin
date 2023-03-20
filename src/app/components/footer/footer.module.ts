import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterComponent } from './footer.component';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterLink,
        TranslateModule
    ],
  exports: [
    FooterComponent
  ],
  declarations: [FooterComponent]
})
export class FooterModule {}
