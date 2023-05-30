import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StateService } from 'src/app/Services/state.service';
import { UserdataService } from 'src/app/Services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit{
  loginUser!: FormGroup;
  submitted:boolean = false;
  valCheck: string[] = ['remember'];

  constructor(private fb: FormBuilder, 
    private Userdata: UserdataService,
    private service: MessageService,
    private stateSrv: StateService,
    private router:Router
    ){
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
      const {username, password} = this.loginUser.value;
      this.Userdata.getUser(username,password).then(
        (res:any)=>{
          if(res.status === true){
          this.stateSrv.isLoggedIn = true;
          this.stateSrv.isLoggedInUserObs.next(true);
          localStorage.setItem("user",JSON.stringify(username));
          this.service.add({ key: 'tst', severity: 'success', summary: 'Success', detail: 'Login Successfully' });
        this.router.navigate(['home'])
        }else{
          this.service.add({ key: 'tst', severity: 'error', summary: 'Failed', detail: 'Invalid Credentials' });
        }
      })
    }
  }

  emitData = "";
  uData(item: any){
    console.warn(item)
    this.emitData = item;
  }
  }

