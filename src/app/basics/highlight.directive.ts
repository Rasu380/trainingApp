import { Directive,ElementRef,HostListener  } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    //this.el.nativeElement.style.backgroundColor = "red";
  }
  @HostListener('mouseenter') MouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') MouseLeave() {
    this.highlight('');
  }
  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }


}
