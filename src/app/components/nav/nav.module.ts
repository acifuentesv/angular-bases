import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule //para que funcion mi routerlink
  ],
  exports: [NavComponent]
})
export class NavModule { }
