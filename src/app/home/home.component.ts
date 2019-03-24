import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { VideoService } from '../video.service';
import { Video } from '../interfaces';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private videoService: VideoService) {}

	searchForm: FormGroup = null;
	stickyInput = null;
	videosList: any = [];
	recentVideosList: any = [];
	selectedVideoID = null;
	videoDetails: Video =  null;
	@Input() video: Video = null;
	@Input() videoID: number = null;
	@Output() videoSelect = new EventEmitter<any>();


	@ViewChild('videosListing') videosListingElement: ElementRef;

	ngOnInit() {
		this.videoService.getVideos('');
		this.createForm();
		this.renderFreshVideos();
	}

	get searchFormControl() {
		return this.searchForm.controls;
	}

	createForm() {
		this.searchForm = new FormGroup({
			'searchString': new FormControl(''),
		});

	}

	makeInputSticky() {
		this.stickyInput = true;
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		const element = this.videosListingElement.nativeElement;
		if (this.videosListingElement.nativeElement !== undefined) {
			const viewportOffset = element.getBoundingClientRect();
			this.stickyInput = viewportOffset.top < 5 ? true : false;
		}
	}

	showDetails(videoID: string) {
		const videoDetails = this.videosList[videoID];
		this.recentVideosList.push(videoDetails);
		this.openPopUp(videoDetails, videoID);
	}

	openPopUp(videoDetails: any, videoID: string) {
		this.videoDetails = videoDetails;
		this.selectedVideoID = videoID;
	}

	closeDetails() {
		this.selectedVideoID = null;
	}

	renderFreshVideos() {
		this.videoService.videoSearchResult.subscribe( (response) => {
			if (Array.isArray(response) &&  response.length > 0)  {
				this.videosList = response;
			} else {
				this.videosList = [];
			}
		});
	}

}

// AIzaSyAgjivNZ9xpkMwu_EQssL4ENzfAOjYk5Co

