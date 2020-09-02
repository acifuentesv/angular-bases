import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // @Input() itemName:string;
  @Output() selected = new EventEmitter();
  @Input() phones;

  constructor() { }

  ngOnInit(): void {
  }



}
