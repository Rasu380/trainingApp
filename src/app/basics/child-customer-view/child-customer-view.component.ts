import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-child-customer-view',
  templateUrl: './child-customer-view.component.html',
  styleUrls: ['./child-customer-view.component.css']
})
export class ChildCustomerViewComponent {
  @Input() customers:Customer[]=[];
}
