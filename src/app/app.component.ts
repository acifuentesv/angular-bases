import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  name:string = "Fernando";
  phoneList = [ 'Sansumg', 'iPhone', 'Motorolla', 'LG' ];
  phone:string;
  welcome() {
    // alert("Hola "+this.name+", como estas?");
    alert(`Hola ${this.name} como estas?`);
  }

  recieveData(phone){
    this.phone = phone;
  }


  
  //dedug
  // console.log(valor);
  // consola de chrome (source)
  // debugger
}
