import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Models/Todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  addTodos(todoData: any){
    return new Promise((resolve,reject)=>{
      this.http.post<Todo>('http://localhost:3000/todos',todoData).subscribe(
        res=>{
          resolve({status:true,msg:"SUCCESS"});
        }, err => {
          reject({status:false,msg:'FAILED'});
        }
      )
    })
  }

  getTodos(userid:any){
    return new Promise((resolve,reject)=>{
      this.http.get<Todo>(`http://localhost:3000/todos?userId=${userid}`).
      subscribe(
        (response:any) => {
          if(response.length === 0){
            resolve({status:false, msg:"No Todo Found"});
            console.log(response);
          }else{
            resolve({status:true, msg:"SUCCESS", data:response});
            // console.log(response);
          }      
    },(error)=>{
      reject({status:false,msg:'FAILED'})
    }) 
    })
  } 

  deleteTodos(id:number){
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return new Promise((resolve,reject)=>{
      this.http.delete(`http://localhost:3000/todos/${id}`, {headers}).subscribe(res=>{
        resolve(res);
      })
    })
  }
  updateTodos(data:any){
    console.warn(data.id);
    return new Promise((resolve,reject)=>{
      this.http.put(`http://localhost:3000/todos/${data.id}`, data).subscribe((res)=>{
        resolve(res);
      },err=>{
        reject(err);
      })
    })
  }
}
