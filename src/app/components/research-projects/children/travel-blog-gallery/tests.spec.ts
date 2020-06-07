import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TravelBlogGalleryComponent } from './travel-blog-gallery';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxImageGalleryModule } from 'ngx-image-gallery';

describe('WorkProjectComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxImageGalleryModule,
        FontAwesomeModule
      ],
      declarations: [
        TravelBlogGalleryComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'TravelBlogGalleryComponent' component`, () => {
    const fixture = TestBed.createComponent(TravelBlogGalleryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should define conf`, () => {
    const fixture = TestBed.createComponent(TravelBlogGalleryComponent);
    const app: TravelBlogGalleryComponent = fixture.debugElement.componentInstance;
    expect(app.conf).toBeDefined();
  });

  it(`should define ngxImageGallery`, () => {
    const fixture = TestBed.createComponent(TravelBlogGalleryComponent);
    const app: TravelBlogGalleryComponent = fixture.debugElement.componentInstance;
    expect(app.ngxImageGallery).toBeDefined();
  });

  it(`should open ngxImageGallery`, () => {
    const fixture = TestBed.createComponent(TravelBlogGalleryComponent);
    const app: TravelBlogGalleryComponent = fixture.debugElement.componentInstance;

    spyOn(app.ngxImageGallery, 'open');
    app.openGallery(0);
    expect(app.ngxImageGallery.open).toHaveBeenCalled();
  });
});
