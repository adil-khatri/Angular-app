import { Component } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { Message, MessageService } from 'primeng/api';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [MessageService]
})
export class HomepageComponent {

  localItem:any;
  title = 'Add your Todos';
  currentUser: any;
  showList: any;
  userid:any;
  todoId:any;
  editTask:any;
  listOfTodos: any[]=[];
  isEdit:boolean=false;  

  constructor(private service: MessageService, private todoSrv: TodosService){        
    
    this.currentUser = localStorage.getItem("user");
    this.currentUser = JSON.parse(this.currentUser);
    // console.warn(this.currentUser[0].id);
    this.userid = this.currentUser[0].id;   
   
    this.getTodo()
  }

  getTodo(){
    this.todoSrv.getTodos(this.userid).then((res:any)=>{
      // console.log(res.data);
      this.listOfTodos = res.data;
      this.listOfTodos = this.listOfTodos.sort();
      })
  }

  addTodo(task: string){
    this.showList = {userId: this.userid,name: task }
    let date=new Date()
    if(task === ""){
      this.service.add({ key: 'tst', severity: 'error', summary: 'FAILED', detail: 'Write Something' });
    }
    else{
      if(!this.isEdit){
        this.todoSrv.addTodos({...this.showList,time:date}).then(res=>{
          console.log(res);
          this.getTodo()
        })
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success', detail: 'Todo Added Successfully' });
      }else{
        this.todoSrv.updateTodos({id: this.todoId,...this.showList,time:date}).then((res:any)=>{
        console.log(res);       
        })
        this.getTodo()
        this.isEdit=false;
      }
    }
    this.editTask=""
  }

  removeTodo(id:any){
    this.todoSrv.deleteTodos(id).then((res)=>{
      console.log(res);
      this.getTodo()
    })
    this.service.add({ key: 'tst', severity: 'error', summary: 'Deleted', detail: 'Todo Deleted Successfully' });
  }
  editTodo(index: number){
    // this.todoSrv.getTodos(this.userid).then((res:any)=>{
    //   this.editData = res.data;
    //   console.warn(this.editData);
    //   for(let i=0 ; i<this.editData.length; i++){
    //     this.todoId = this.editData[i].id;
    //     console.log(this.todoId);
    //     if(id === this.todoId){
    //       this.editTask =  this.editData[i].name;
    //       // console.warn(this.editTask);             
    //     } 
    //   }
    //   console.log(this.editTask);
    // })
  //  console.log( this.listOfTodos[index]);
   this.todoId = this.listOfTodos[index].id;
   this.editTask= this.listOfTodos[index].name;
   this.isEdit=true;
  }    
}
