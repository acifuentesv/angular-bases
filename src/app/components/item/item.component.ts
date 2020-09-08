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

  //forma3
  @Output() added = new EventEmitter();
  @Output() removed = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  //forma1
  sendEvent(Pphone, Pevent){
    this.selected.emit({ phone:Pphone, event:Pevent });
  }

  //forma2
  addItem(phone){
    this.selected.emit({ phone, event: 'add' });
  }

  removeItem(phone){
    this.selected.emit({ phone, event: 'remove'});
  }

 

}
