import { Component, ViewChild } from '@angular/core';
import { GALLERY_IMAGE, NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';

@Component({
  selector: 'app-work-project',
  templateUrl: './work-project.component.html',
  styleUrls: ['./work-project.component.scss']
})
export class WorkProjectComponent {
  @ViewChild(NgxImageGalleryComponent, { static: true }) ngxImageGallery: NgxImageGalleryComponent;

  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  images: GALLERY_IMAGE[] = [
    {
      url: '/assets/images/work/ohmywrap/1.png',
      thumbnailUrl: '/assets/images/work/ohmywrap/1.png'
    },
    {
      url: '/assets/images/work/ohmywrap/2.png',
      thumbnailUrl: '/assets/images/work/ohmywrap/2.png'
    },
    {
      url: '/assets/images/work/ohmywrap/3.png',
      thumbnailUrl: '/assets/images/work/ohmywrap/3.png'
    },
    {
      url: '/assets/images/work/ohmywrap/4.png',
      thumbnailUrl: '/assets/images/work/ohmywrap/4.png'
    },
  ];

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
}
