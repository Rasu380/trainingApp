import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { CustomerState } from '../store/reducer/customer.reducer';
import { addcustomers } from '../store/action/customer.actions';

@Component({
  selector: 'ngrx-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class NGRXCustomerAddComponent {
 
  constructor(private store:Store<CustomerState>){
    
  }
  addCustomer(customername:string){
    const customer = new Customer();
    customer.name = customername;
    this.store.dispatch(addcustomers(customer))
  }
}
