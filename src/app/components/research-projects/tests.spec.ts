import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResearchProjectsComponent } from './research-projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WorkProjectComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxImageGalleryModule,
        FontAwesomeModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        ResearchProjectsComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'ResearchProjectsComponent' component`, () => {
    const fixture = TestBed.createComponent(ResearchProjectsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should define items`, () => {
    const fixture = TestBed.createComponent(ResearchProjectsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.items).toBeDefined();
  });

  it('should render project', () => {
    const fixture = TestBed.createComponent(ResearchProjectsComponent);
    fixture.detectChanges();

    const app: ResearchProjectsComponent = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    if (app.items && app.items.length) {
      expect(compiled.querySelector('.project').textContent).toBeDefined();
    } else {
      expect(compiled.querySelector('.project').textContent).toBeUndefined();
    }
  });
});
