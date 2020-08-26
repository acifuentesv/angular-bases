import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  name:string = "Fernando";

  welcome() {
    // alert("Hola "+this.name+", como estas?");
    alert(`Hola ${this.name} como estas?`)
  }

}
