import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResumeComponent } from './resume.component';
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
        ResumeComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'ResumeComponent' component`, () => {
    const fixture = TestBed.createComponent(ResumeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
