import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatListModule} from "@angular/material/list"
import {MatMenuModule} from "@angular/material/menu"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatSlideToggleModule} from "@angular/material/slide-toggle"
import{ MatCardModule} from "@angular/material/card"
import {MatFormFieldModule} from "@angular/material/form-field"
import{MatInputModule} from "@angular/material/input"



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports:[
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MyMaterialModule { }
