import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { selectCustomers } from '../store/selector/customer.selectors';

@Component({
  selector: 'ngrx-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class NGRXCustomerViewComponent {

  customers$!: Observable<Customer[]> 

  constructor(private store:Store){
    this.customers$= this.store.pipe(select(selectCustomers))
  }
}
