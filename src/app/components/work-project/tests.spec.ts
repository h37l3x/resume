import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkProjectComponent } from './work-project.component';
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
        WorkProjectComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'WorkProjectComponent' component`, () => {
    const fixture = TestBed.createComponent(WorkProjectComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should define conf`, () => {
    const fixture = TestBed.createComponent(WorkProjectComponent);
    const app: WorkProjectComponent = fixture.debugElement.componentInstance;
    expect(app.conf).toBeDefined();
  });

  it(`should define ngxImageGallery`, () => {
    const fixture = TestBed.createComponent(WorkProjectComponent);
    const app: WorkProjectComponent = fixture.debugElement.componentInstance;
    expect(app.ngxImageGallery).toBeDefined();
  });

  it(`should open ngxImageGallery`, () => {
    const fixture = TestBed.createComponent(WorkProjectComponent);
    const app: WorkProjectComponent = fixture.debugElement.componentInstance;

    spyOn(app.ngxImageGallery, 'open');
    app.openGallery(0);
    expect(app.ngxImageGallery.open).toHaveBeenCalled();
  });
});
