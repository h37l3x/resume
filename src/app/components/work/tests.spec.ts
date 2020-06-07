import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkComponent } from './work.component';
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
        WorkComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'WorkComponent' component`, () => {
    const fixture = TestBed.createComponent(WorkComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should define items`, () => {
    const fixture = TestBed.createComponent(WorkComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.items).toBeDefined();
  });
});
