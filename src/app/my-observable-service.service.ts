import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyObservableServiceService {

  constructor() { }
  getObservable(): Observable<number>{
    return new Observable<number>((Subscriber: Subscriber<number>)=>{
      Subscriber.next(1);
    })
  }
}
