import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[autoScroll]',
})
export class AutoScrollDirective implements AfterViewInit {
  @Input() observableToScrollOn!: Observable<any>;
  @Input() mode: 'bottom' | 'top' = 'bottom';
  constructor(private el: ElementRef) {}

  scrollToBottom(): void {
    setTimeout(() => {
      this.el.nativeElement.scroll({
        top: this.el.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 500);
  }

  ngAfterViewInit(): void {
    this.observableToScrollOn.subscribe(() => {
      this.scrollToBottom();
    });
  }
}
