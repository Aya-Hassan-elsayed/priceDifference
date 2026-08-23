import { Directive, Input, Renderer2, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appPagination]',
  exportAs: 'Pagination',
})
export class PaginationDirective {
  @Input() totalPage!: number;
  @Input() totalItems!: number;  // Add this line
  pagenumber: number = 1;

  @Output() onchangeEventEmitter = new EventEmitter<number>();

  constructor(private rendered: Renderer2, private el: ElementRef) {}

  onNext() {
    this.setPage(Math.min(this.totalPage, this.pagenumber + 1));
  }

  onPervious() {
    this.setPage(Math.max(1, this.pagenumber - 1));
  }

  onFirst() {
    this.setPage(1);
  }

  onLast() {
    this.setPage(this.totalPage);
  }

  setPage(pagenumber: number) {
    this.pagenumber = pagenumber;
    this.rendered.setProperty(this.el.nativeElement, "value", pagenumber);
    this.onchangeEventEmitter.emit(pagenumber);
    console.log(this.pagenumber);
  }
  }

// the code with 