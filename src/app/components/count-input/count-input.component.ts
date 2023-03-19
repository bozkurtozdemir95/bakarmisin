import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-input',
  templateUrl: './count-input.component.html',
  styleUrls: ['./count-input.component.scss'],
})
export class CountInputComponent  implements OnInit {
  @Input() item: any;
  count: any = 1;
  constructor() { }

  ngOnInit() {}
  minus() {
    this.item.count > 1 ? this.item.count = this.item.count - 1 : this.item.count = 1;
  }

  plus() {
    this.item.count = this.item.count + 1;
  }
}
