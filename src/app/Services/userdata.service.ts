import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
  constructor(private http: HttpClient) { 
  }

  users() : Promise<any> {
    return new Promise((resolve)=>{
      lastValueFrom(this.http.get("https://jsonplaceholder.typicode.com/users")).then((res)=>{
        console.log(res);
        return resolve(res);
    });   
    })
  }

  getProducts() : Promise<any> {
    return new Promise((resolve)=>{
      lastValueFrom(this.http.get("https://dummyjson.com/products")).then((res)=>{
        console.log(res);
        return resolve(res);
    });   
    })
  }


  addUser(context: any){
    return new Promise((resolve,reject)=>{
      this.http.post<User>('http://localhost:3000/users',context).
      subscribe(
        (data) => {
        resolve({status:true,msg:"SUCCESS"})
    },(error)=>{
      reject({status:false,msg:'FAILED'})
    }) 
    })
    // console.log(this.uname);
  }
  getUser(username: string,password:string){
    return new Promise((resolve,reject)=>{
      this.http.get<User>(`http://localhost:3000/users?username=${username}&&password=${password}`)
      .subscribe(
        (response:any) => {
          if(response.length === 0){
            resolve({status:false, msg:"Invalid Credential"});
            console.log(response);
          }else{
            resolve({status:true, msg:"SUCCESS", data:response});
            console.log(response);
          }      
    },(error)=>{
      reject({status:false,msg:'FAILED'})
    }) 
    })
  } 
}
