import { Component, ViewChild } from '@angular/core';
import { GALLERY_IMAGE, NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';

@Component({
  selector: 'app-telegram-birthday-notification-bot',
  templateUrl: './telegram-birthday-notification-bot.html',
  styleUrls: ['./telegram-birthday-notification-bot.scss']
})
export class TelegramBirthdayNotificationBotComponent {
  @ViewChild(NgxImageGalleryComponent, { static: true }) ngxImageGallery: NgxImageGalleryComponent;

  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  images: GALLERY_IMAGE[] = [
    {
      url: '/assets/images/research-projects/birthday_schedule/0.png',
      thumbnailUrl: '/assets/images/research-projects/birthday_schedule/0.png'
    },
  ];

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
}
