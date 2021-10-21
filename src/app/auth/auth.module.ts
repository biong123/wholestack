import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MyMaterialModule } from '../my-material/my-material.module';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class AuthModule { }
