import { Component, ViewChild } from '@angular/core';
import { GALLERY_IMAGE, NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';

@Component({
  selector: 'app-travel-blog-gallery',
  templateUrl: './travel-blog-gallery.html',
  styleUrls: ['./travel-blog-gallery.scss']
})
export class TravelBlogGalleryComponent {
  @ViewChild(NgxImageGalleryComponent, { static: true }) ngxImageGallery: NgxImageGalleryComponent;

  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  images: GALLERY_IMAGE[] = [
    {
      url: '/assets/images/research-projects/travel-blog-gallery/0.png',
      thumbnailUrl: '/assets/images/research-projects/travel-blog-gallery/0.png'
    },
  ];

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
}
