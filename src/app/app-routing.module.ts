import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVideoComponent } from './list-video/list-video.component';
import { VideoDetailsComponent } from './video-details/video-details.component';


const routes: Routes = [
	{path: '', component: ListVideoComponent},
	{path: 'details/:id', component: VideoDetailsComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
