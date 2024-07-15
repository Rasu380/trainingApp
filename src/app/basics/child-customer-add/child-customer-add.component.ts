import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-child-customer-add',
  templateUrl: './child-customer-add.component.html',
  styleUrls: ['./child-customer-add.component.css']
})
export class ChildCustomerAddComponent {
  customers:Customer[]=[];
  @Output() customerAdded = new EventEmitter<Customer[]>;

  addCustomer(customer_name:string){
    let customer:Customer = {name:customer_name} ;
    this.customers.push(customer);
    console.log(this.customers);
    this.customerAdded.emit(this.customers);
  }

}
