import { Component } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'Add your Todos';
  todoList: any[]=[];
  addTodo(task: string){
    this.todoList.push({id: this.todoList.length,name: task})
    console.warn(this.todoList);
  }
  removeTodo(id:any){
    this.todoList = this.todoList.filter(item => item.id!==id)
  }
}
