import { Directive, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appTheme]'
})
export class ThemeDirective {
	@Input() theme: string;
	constructor() { }

	@HostListener('click', ['$event'])

	public onClick(event: MouseEvent) {
		console.log(this.theme);
		document.body.setAttribute('mode', this.theme);
	}

}
