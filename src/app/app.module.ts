import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faVk,
  faFacebookF,
  faInstagram,
  faGoogle,
  faYoutube,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './components/work/work.component';
import { ResearchProjectsComponent } from './components/research-projects/research-projects.component';
import {
  TelegramBirthdayNotificationBotComponent
} from './components/research-projects/children/telegram-birthday-notification-bot/telegram-birthday-notification-bot';
import { WorkProjectComponent } from './components/work-project/work-project.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TravelBlogGalleryComponent } from './components/research-projects/children/travel-blog-gallery/travel-blog-gallery';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    ResearchProjectsComponent,
    TelegramBirthdayNotificationBotComponent,
    TravelBlogGalleryComponent,
    WorkProjectComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    NgxImageGalleryModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faTwitter, faVk, faFacebookF, faInstagram, faGoogle, faYoutube, faLinkedinIn, faGithub);
  }
}
