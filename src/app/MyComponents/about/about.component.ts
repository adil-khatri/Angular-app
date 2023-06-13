import { Component } from '@angular/core';
import { UserdataService } from '../../Services/userdata.service'
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  showTable: boolean=false;
  users:any;
  products: any;
  loading$ = this.loadingService.loading$;

   //to get service data
   constructor( private userdata: UserdataService, private loadingService: LoadingService ){
    // console.log(userdata.users());
    this.fetchUsers();
    this.fetchProducts()
  }
  ngOnInit(){
    this.fetchUsers();
  }

  toggleShowTable(): void{
    this.showTable = !this.showTable;
  }

  async fetchUsers(){
    this.users = await this.userdata.users();
  }
  async fetchProducts(){
    this.products = await this.userdata.getProducts();
    this.products = this.products.products
    console.log(this.products);
    
  }
}
