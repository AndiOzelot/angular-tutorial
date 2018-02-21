import { Directive, HostListener, HostBinding } from "@angular/core/src/metadata/directives";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggle() {
        this.isOpen = !this.isOpen;
    }
}