import { Component, OnInit, OnChanges, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { VideoService } from '../video.service';
import { Video } from '../interfaces';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
	animations : [
		trigger('hover', [
			state('out', style({ width: '60px' })),
			state('in' , style({ width: '120px' })),
			transition('* => *', [
				animate('0.1s ease-in')
			])
		])
	]
})
export class SidebarComponent implements OnInit, OnChanges {
	state = null;
	showingSettings = false;
	recentVideoTracks: Video[] = [];
	favoriteVideoTracks: Video[] = [];
	@Input() recentVideosList = [];
	@Output() seletedVideo = new EventEmitter<any>();

	constructor( private videoService: VideoService ) { }

	ngOnInit() {
		console.log(this.recentVideosList);
	}

	ngOnChanges() {
		console.log(this.recentVideosList);
	}

	showSettings() {
		this.showingSettings = !this.showingSettings;
	}


	getSongName(text: string) {
		return this.state === 'in' ? text.length > 10 ? `${text.substring(0, 10)}...` : text : text.charAt(0);
	}

	playVideo(video) {
		console.log(video);
		this.seletedVideo.emit(video);
	}

	@HostListener('mouseenter', ['$event'])
	@HostListener('mouseleave', ['$event'])
	onHover(event: MouseEvent) {
		this.state = event.type === 'mouseenter' ? 'in' : 'out';
	}

}
