import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Video } from '../interfaces';

@Component({
	selector: 'app-video-details',
	templateUrl: './video-details.component.html',
	styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent {
	@Input() videoDetails: Video = null;
	@Output() closePanel = new EventEmitter<boolean>();

	constructor(private sanitizer: DomSanitizer) { }

	getVideoURL(videoDetails: any) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoDetails.id.videoId}`);
	}

	closeDetails() {
		this.closePanel.emit(true);
	}

}
