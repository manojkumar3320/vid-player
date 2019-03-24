import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { VideoService } from '../video.service';
import { Video } from '../interfaces';

@Component({
	selector: 'app-list-video',
	templateUrl: './list-video.component.html',
	styleUrls: ['./list-video.component.css']
})
export class ListVideoComponent {

	selectedVideo = null;
	@Input() video: Video = null;
	@Input() videoID: number = null;
	@Output() videoSelect = new EventEmitter<any>();



}
