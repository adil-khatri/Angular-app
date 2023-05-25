import { Component } from '@angular/core';
import { UserdataService } from '../../Services/userdata.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  showTable: boolean=false;
  users:any;

  toggleShowTable(): void{
    this.showTable = !this.showTable;
  }

  //to get service data
  constructor( private userdata: UserdataService ){
    // console.log(userdata.users());
    this.fetchUsers();
  }

  async fetchUsers(){
    this.users = await this.userdata.users();
  }
}
