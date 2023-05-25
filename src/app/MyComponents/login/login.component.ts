import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  loginData(){
    console.log(this.loginUser.value);
    
  }
}
