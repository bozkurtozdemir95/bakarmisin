import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(public notify: NotificationService) { }

  ngOnInit() {}

}
