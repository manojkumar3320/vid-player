import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

import { FilterPipe } from './filter.pipe';

import { ScrollSmoothDirective } from './scroll-smooth.directive';
import { ThemeDirective } from './theme.directive';


@NgModule({
	declarations: [
		AppComponent,
		ListVideoComponent,
		VideoDetailsComponent,
		FooterComponent,
		FilterPipe,
		SidebarComponent,
		ScrollSmoothDirective,
		HomeComponent,
		ThemeDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
