import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCapsLock]'
})
export class CapsLockDirective {

  constructor() { }
  @Output('appCapsLock') CapsLock = new EventEmitter<boolean>();
  @HostListener('window:keydown', ['$event'])
  OnKeyDown($event: KeyboardEvent) {
    this.CapsLock.emit($event.getModifierState && $event.getModifierState('CapsLock'));
  }

  @HostListener('window: keyup', ['$event'])
  OnKeyUp($event: KeyboardEvent) {
    this.CapsLock.emit($event.getModifierState && $event.getModifierState('CapsLock'));
  }

}
