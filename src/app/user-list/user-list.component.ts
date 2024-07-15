
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]=[];
  edituser:boolean =false;
  editid =0;
  userForm = new FormGroup({
    name:new FormControl(""),
    email: new FormControl("")
  })
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.getUsers().subscribe((response)=> {
      console.log(response)
      this.users = response
    })
  }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  onSubmit(){
    console.log(this.userForm.value);
    this.addUser().subscribe((response)=>{
      this.users.push(response)
    })
  }

  addUser(){
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', {
      name: this.userForm.controls.name.value,
      email: this.userForm.controls.email.value
    });
  }
  edit(id:number){
    this.edituser =true;
    const user = this.users.find(user=>{
      return user.id == id
    })
    if( user!== undefined){
        this.userForm.controls.name.setValue(user.name)
        this.userForm.controls.email.setValue(user.email)
        this.editid= id
    }
  }

  onUpdate(){
    const request= this.http.put<User>('https://jsonplaceholder.typicode.com/users/'+this.editid,{
      name: this.userForm.controls.name.value,
      email: this.userForm.controls.email.value
    })

    request.subscribe((response)=>{
      this.users.map(user=>{
        if(user.id ==response.id){
          user.name=response.name;
          user.email=response.email
        }
        return user;
      })
    })
  }
  delete(id:number){
    const request =this.http.delete('https://jsonplaceholder.typicode.com/users/'+id)
    request.subscribe(()=>{
      this.users =this.users.filter(user=>{
        return user.id !== id
      }
      )
    })
  }
}
class User{
  name!:string
  email!:string
  id!:number
}

