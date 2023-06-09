import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoadingService } from 'src/app/Services/loading.service';
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
  currentUserId: any[]= [];
  storedUser: any[]=[];
  submitted:boolean = false;
  valCheck: string[] = ['remember'];
  loading$ = this.loadingService.loading$;

  constructor(private fb: FormBuilder, 
    private Userdata: UserdataService,
    private service: MessageService,
    private stateSrv: StateService,
    private router:Router,
    private loadingService: LoadingService
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
            // console.log(res.data[0].id)
            // console.warn(this.storedUser);
            
            if(res.status === true){       
            this.currentUserId = res.data[0].id;
            this.storedUser.push({id: this.currentUserId, currectuser: username})     
            this.stateSrv.isLoggedIn = true;
            this.stateSrv.isLoggedInUserObs.next(true);
            localStorage.setItem("user",JSON.stringify(this.storedUser));
            this.service.add({ key: 'tst', severity: 'success', summary: 'Success', detail: 'Login Successfully' });
            this.router.navigate(['/user/dashboard']);
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

