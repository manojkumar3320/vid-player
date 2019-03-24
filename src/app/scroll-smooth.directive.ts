import { Directive, HostListener, ElementRef, Input } from '@angular/core';

import { VideoService } from './video.service';

@Directive({
	selector: '[appScrollSmooth]'
})
export class ScrollSmoothDirective {
	constructor(private videoService: VideoService) {}

	typingTimer = null;
	doneTypingInterval = 400;
	@Input() videosListingElement: ElementRef;
	@Input() searchText: string;

	@HostListener('keyup', ['$event'])
	@HostListener('keydown', ['$event'])
	@HostListener('click', ['$event'])

	public onKeyUp(event: KeyboardEvent) {
		clearTimeout(this.typingTimer);
		this.typingTimer = setTimeout( () => {
			this.videosListingElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			// if (this.searchText !== null && this.searchText !== '' && this.searchText !== undefined) {
				this.videoService.getVideos(this.searchText);
			// }
		}, this.doneTypingInterval);
	}

	public onKeyDown(event: KeyboardEvent) {
		clearTimeout(this.typingTimer);
	}

	public onClick(event: MouseEvent) {
		this.videosListingElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

}
