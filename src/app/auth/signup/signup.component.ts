import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserdataService } from 'src/app/Services/userdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerUser: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private Userdata: UserdataService){
    
    this.registerUser = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(5)]],
      cpassword: ['', [Validators.required,Validators.minLength(5)]],
    })
  }
  get registerFormControl() {
    return this.registerUser.controls;
  }
  onSubmit (){
    this.submitted=true;
    if(this.registerUser.valid){
      // alert('Form Submitted succesfully!!! Check the values in browser console.');
      console.log(this.registerUser.value);
      let context = this.registerUser.value;
     this.Userdata.addUser(context).then((res:any)=>{
       alert(res.msg+' Form Submitted succesfully!!! Check the values in browser console.');
     }).catch((error)=>{
      console.log(error  );
      
     })
    }    
  }
}
