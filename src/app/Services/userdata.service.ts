import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  users() : Promise<any> {
    return new Promise((resolve)=>{
      lastValueFrom(this.http.get("https://jsonplaceholder.typicode.com/users")).then((res)=>{
        // console.log(res);
        return resolve(res);
    });   
    })
  }
}
