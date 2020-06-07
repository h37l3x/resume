import { Component } from '@angular/core';

@Component({
  selector: 'app-research-projects',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss']
})
export class ResearchProjectsComponent {
  items = [
    {
      name: 'telegram-birthday-notification-bot',
      title: '@birthday_schedule_bot',
      className: 'telegram-birthday-notification-bot',
      description: 'Telegram bot that helps you to remember birthdays of important people',
      previewImageUrl: '/assets/images/research-projects/birthday_schedule/preview.jpg'
    },
    {
      name: 'travel-blog-gallery',
      title: 'Travel blog gallery',
      className: 'travel-blog-gallery',
      description: '',
      previewImageUrl: '/assets/images/research-projects/travel-blog-gallery/preview.png'
    }
  ];
}
