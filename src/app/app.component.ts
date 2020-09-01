import { Component } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  name:string = "Fernando";
  phoneList = [ 'Sansumg', 'iPhone', 'Motorolla', 'LG' ];
  welcome() {
    // alert("Hola "+this.name+", como estas?");
    alert(`Hola ${this.name} como estas?`)
  }
}
