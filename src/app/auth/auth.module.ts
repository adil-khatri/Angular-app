import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SignupComponent,LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    MessagesModule,
    ToastModule,
    MessageModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    SliderModule,
    MenubarModule,
    InputTextModule,
    HttpClientModule,
  ]
})
export class AuthModule { }
