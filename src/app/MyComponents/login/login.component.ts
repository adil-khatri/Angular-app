import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernamevalue: string = '';
  onKey(event: any){
    this.usernamevalue += event.target.value;
  }
}
