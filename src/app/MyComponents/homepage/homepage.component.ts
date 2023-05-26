import { Component } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [MessageService]
})
export class HomepageComponent {

  localItem:any;
  title = 'Add your Todos';
  todoList: any[]=[];
  constructor(private service: MessageService){
    this.localItem = localStorage.getItem("todos");
    // console.log(this.localItem)
    if(this.localItem == null){
      this.todoList = [];
    }
    else{
      this.todoList = JSON.parse(this.localItem);
      let item = [...this.todoList]
      console.log(item);
      
      // console.log(typeof(this.localItem));
    }

  }
  addTodo(task: string){
    this.todoList.push({id: this.todoList.length,name: task});
    localStorage.setItem("todos",JSON.stringify(this.todoList));
    this.service.add({ key: 'tst', severity: 'success', summary: 'Success', detail: 'Todo Added Successfully' });
    // console.warn(this.todoList);
  }
  removeTodo(id:any){
    this.todoList = this.todoList.filter(item => item.id!==id);
    localStorage.setItem("todos",JSON.stringify(this.todoList));
    this.service.add({ key: 'tst', severity: 'error', summary: 'Deleted', detail: 'Todo Deleted Successfully' });
    // console.warn(this.todoList);
  }
}
