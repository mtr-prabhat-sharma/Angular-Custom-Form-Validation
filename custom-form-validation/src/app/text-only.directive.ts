import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextOnly]',
  standalone: true
})
export class TextOnlyDirective {

  private regExp: RegExp = new RegExp(/^[A-Za-z ]$/);
  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const inputChar = event.key;
    console.log("sdsadsa",inputChar)
    if (event.ctrlKey || inputChar === 'Backspace' || inputChar === 'Tab') {
      return;
    }
    if (!this.regExp.test(inputChar)) {
      event.preventDefault(); // block invalid character
    }
  }
}
