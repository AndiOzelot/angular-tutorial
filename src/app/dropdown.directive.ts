import { HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';
@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggle() {
        this.isOpen = !this.isOpen;
    }
}