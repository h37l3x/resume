import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { WorkProjectComponent } from './components/work-project/work-project.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ResearchProjectsComponent } from './components/research-projects/research-projects.component';
import {
  TelegramBirthdayNotificationBotComponent
} from './components/research-projects/children/telegram-birthday-notification-bot/telegram-birthday-notification-bot';
import { TravelBlogGalleryComponent } from './components/research-projects/children/travel-blog-gallery/travel-blog-gallery';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'resume', data: { state: 'root', animation: 'HomePage' } },
  { path: 'work', component: WorkComponent, data: { state: 'work', animation: 'FilterPage' } },
  { path: 'work/:projectName', component: WorkProjectComponent, data: { state: 'work', animation: 'AboutPage' } },
  { path: 'research-projects', component: ResearchProjectsComponent, data: { state: 'research-projects' } },
  {
    path: 'research-projects/telegram-birthday-notification-bot',
    component: TelegramBirthdayNotificationBotComponent, data: { state: 'research-projects' }
  },
  {
    path: 'research-projects/travel-blog-gallery',
    component: TravelBlogGalleryComponent, data: { state: 'research-projects' }
  },
  { path: 'resume', component: ResumeComponent, data: { state: 'resume', animation: 'HomePage' } },
  { path: '**', component: ResumeComponent, data: { state: 'resume', animation: 'HomePage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
