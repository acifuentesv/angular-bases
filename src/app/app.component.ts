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
  count:number = 0;

  welcome() {
    // alert("Hola "+this.name+", como estas?");
    alert(`Hola ${this.name} como estas?`);
  }

  recieveData(data){
    console.log(data)
    if(data.event === 'add'){
      this.add(data.phone)
    } 
    if(data.event === 'remove'){
      this.remove(data.phone)
    }
  }

  add(phone){
    console.log('se agrego', phone)
    if(this.phone === phone){
      this.count = this.count + 1;
    } else {
      this.phone = phone;
      this.count = 0;
      this.count = this.count + 1;
    }
  }

  remove(phone){
    console.log('se elimino', phone)
    this.count = this.count - 1;
    if(this.count < 1){
      alert('debes agregar al menos un elemento');
    }
  }


  
  //dedug
  // console.log(valor);
  // consola de chrome (source)
  // debugger
}
