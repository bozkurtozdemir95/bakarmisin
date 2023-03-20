import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {


  langs = [
    {key: "en", name: "English"},
    {key: "tr", name: "Türkçe"},
    {key: "sa", name: "العربية"},
  ]

  constructor(public notify: NotificationService, public translate: TranslateService) {
  }

  ngOnInit() {
  }

  changeLang(e: any) {
    console.log(e);
    this.translate.use(e.detail.value);
  }
}
