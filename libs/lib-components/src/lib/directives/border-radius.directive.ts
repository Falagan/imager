import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[borderRadius]',
})
export class BorderRadiusDirective implements OnInit {
  @Input() borderRadius!: number;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.borderRadius = this.borderRadius + 'px' || '0px';
  }
}
