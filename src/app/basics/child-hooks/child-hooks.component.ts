import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-hooks',
  templateUrl: './child-hooks.component.html',
  styleUrls: ['./child-hooks.component.css']
})
export class ChildHooksComponent implements OnChanges,OnInit,DoCheck,OnDestroy {
 // @Input() text:string =''; // ngOnChange
 @Input() text:string[] =[]; // ngDocheck
 noOfTitles=0;
 ngOnInit(): void {
   //this.text = "First title"
   console.log('ngOnInit called')
   this.noOfTitles=1;
   this.text.push("First title");
 }
  
ngOnChanges(changes: SimpleChanges): void {
 // if(!changes['text'].isFirstChange()){
 //   console.log('You are modifying the original value')
 // }
  console.log('ngOnChanges called',changes)
  //console.log('ngOnChanges called',changes['text'].currentValue)
}

ngDoCheck(): void {
 if(this.text.length> this.noOfTitles){
   console.log('ngDocheck called')
   console.log('You are modifying the original value')
   this.noOfTitles++;
 }  
}
ngOnDestroy(): void {
 console.log('ngOnDestroy called')
}
}