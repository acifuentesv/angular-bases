import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // @Input() itemName:string;

  @Input() phones;

  constructor() { }

  ngOnInit(): void {
  }
}
