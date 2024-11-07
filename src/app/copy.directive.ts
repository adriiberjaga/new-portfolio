import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {

  constructor(el: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl: HTMLElement = el.nativeElement;
    targetEl.classList.add('copy')
    targetEl.innerHTML = `Copy &copy; ${currentYear} portfolio Adrià Berjaga 2024`
   }

}
