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
  listOfTodos: any[]=[];

  constructor(private service: MessageService, private todoSrv: TodosService){        
    
    this.currentUser = localStorage.getItem("user");
    this.currentUser = JSON.parse(this.currentUser);
    // console.warn(this.currentUser[0].id);
    this.userid = this.currentUser[0].id;   
    console.warn(this.localItem)
   
    this.getTodo()
  }

  getTodo(){
    this.todoSrv.getTodos(this.userid).then((res:any)=>{
      console.log(res.data);

      this.listOfTodos = res.data;
      this.listOfTodos = this.listOfTodos.sort();
      })
  }

  
  addTodo(task: string){
    // this.todoList.push({ userId: this.userid, id: this.todoList.length,name: task});
    this.showList = {userId: this.userid,name: task }
    let date=new Date()
    this.todoSrv.addTodos({...this.showList,time:date}).then(res=>{
      console.log(res);
      this.getTodo()
    })
    this.service.add({ key: 'tst', severity: 'success', summary: 'Success', detail: 'Todo Added Successfully' });
  }

  removeTodo(id:any){
    this.todoSrv.deleteTodos(id).then((res)=>{
      console.log(res);
      this.getTodo()
    })
    this.service.add({ key: 'tst', severity: 'error', summary: 'Deleted', detail: 'Todo Deleted Successfully' });
  }
}
