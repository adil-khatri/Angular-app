import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginUser!: FormGroup;
  submitted:boolean = false;
  valCheck: string[] = ['remember'];
  password!: string;

  constructor(private fb: FormBuilder){
    this.loginUser = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
   }
  ngOnInit() {
  
  }

  get registerFormControl() {
    return this.loginUser.controls;
  }


  onSubmit(){
    this.submitted=true;
    if(this.loginUser.valid){
      // alert('Form Submitted succesfully!!! Check the values in browser console.');
      console.log(this.loginUser.value);
    }
  }
  emitData = "";
  uData(item: any){
    console.warn(item)
    this.emitData = item;
  }
  }

