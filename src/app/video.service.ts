import { Injectable } from '@angular/core';
import { Video } from './interfaces';
import { Subject } from 'rxjs';

import { environment } from './../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class VideoService {
	youtubeKey = environment.youtubeKey;
	youtubeAPIURL = environment.youtubeAPIURL;
	videoSearchResult = new Subject();

	getVideos(searchSting: string) {
		fetch(this.getURLWithQueryString(searchSting))
			.then(response => {
				console.log(response);
				if (response.status === 200) {
					return response.json();
				} else {
					this.videoSearchResult.next([]);
				}
			})
			.then(response => {
				console.log(response.items);
				this.videoSearchResult.next(response.items);
			}).catch(error => {
				this.videoSearchResult.next([]);
			});
	}

	getURLWithQueryString(searchSting: string) {
		const options = {
			part: 'snippet',
			key: this.youtubeKey,
			maxResults: 20,
			q: searchSting,
		};
		return this.youtubeAPIURL + Object.keys(options).map(key => key + '=' + options[key]).join('&');

	}
}
