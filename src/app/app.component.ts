import { Component } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainingApp';
  fullName = "Rasu.K";
  users = [
    { details : {name:"Rasu"}},
    { details : {name:"Raj"}},
    {}
  ]

  getName() {
    return "Periyasamy";
  };
  ClickCount = 0;
  ClickMe() {
    this.ClickCount++;
  }

  showme = false;
  applyRed = false;
  num = 0;
  status="success";


  //title="Angular-Simple-CRUD";
  name="";
  pendingItems:string[] = [];
  completedItems:string[] = []
  editIndex:number|null = null

  save() {
    if (this.editIndex!=null) {
      this.pendingItems = this.pendingItems.map((val, i) => {
        if (this.editIndex == i) {
          val = this.name
        }
        return val;
      })
    }
    else {
	  	this.pendingItems.push(this.name)
	  }

	 this.editIndex = null;
   this.name="";
  }

  edit(editIndex:number) {
      this.editIndex  = editIndex
      const editData = this.pendingItems.find((val,i) => {
          return editIndex == i
      })
      if(editData)
      this.name = editData;
  }

  delete(deleteIndex:number) {
		this.pendingItems = this.pendingItems.filter((val,i) => {
			return deleteIndex !== i;
		})
  }

  complete(completedIndex:number) {
		const completedItem = this.pendingItems.find((val,i) => {
			return completedIndex == i;
		})
		this.pendingItems = this.pendingItems.filter((val,i) => {
			return completedIndex !== i;
		})

		if(completedItem) {
		this.completedItems.push(completedItem)
    }

  }

  toDate = new Date();
  message ='Welcome to angular';
  price=125;

  // Angular-state-management
  customers:Customer[] =[];
  getCustomers(customers:Customer[]){
    this.customers = customers;
  }
  
  title1:string ='Rasu';
  titles:string[]=[];
  addTitle(){
    this.titles.push(this.title1);
    console.log(this.titles);
  }

  disableHeading =false;
}
