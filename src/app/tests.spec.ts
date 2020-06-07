import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
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
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have menu closed`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isMenuOpened).toEqual(false);
  });

  it(`should be on resume page`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const router: Router = TestBed.get(Router);

    if (router.isActive('resume', false)) {
      expect(app.onResumePage).toEqual(true);
    } else {
      expect(app.onResumePage).toEqual(false);
    }
  });

  it(`should be on resume page`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const router: Router = TestBed.get(Router);
    const route: ActivatedRoute = TestBed.get(ActivatedRoute);

    if (route.snapshot.data && route.snapshot.data.state === 'resume') {
      expect(app.onResumePage).toEqual(true);
    } else {
      expect(app.onResumePage).toEqual(false);
    }
  });

  it(`should open menu`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.openMenu();
    expect(app.isMenuOpened).toEqual(true);
  });

  it(`should close menu after opening`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;

    app.openMenu();
    app.closeMenu();
    expect(app.isMenuOpened).toEqual(false);
  });

});
