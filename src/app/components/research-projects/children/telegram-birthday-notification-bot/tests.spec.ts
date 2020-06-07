import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TelegramBirthdayNotificationBotComponent } from './telegram-birthday-notification-bot';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('WorkProjectComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxImageGalleryModule,
        FontAwesomeModule
      ],
      declarations: [
        TelegramBirthdayNotificationBotComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'TelegramBirthdayNotificationBotComponent' component`, () => {
    const fixture = TestBed.createComponent(TelegramBirthdayNotificationBotComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should define images`, () => {
    const fixture = TestBed.createComponent(TelegramBirthdayNotificationBotComponent);
    const app: TelegramBirthdayNotificationBotComponent = fixture.debugElement.componentInstance;
    expect(app.images).toBeDefined();
  });

  it(`should define conf`, () => {
    const fixture = TestBed.createComponent(TelegramBirthdayNotificationBotComponent);
    const app: TelegramBirthdayNotificationBotComponent = fixture.debugElement.componentInstance;
    expect(app.conf).toBeDefined();
  });

  it(`should define ngxImageGallery`, () => {
    const fixture = TestBed.createComponent(TelegramBirthdayNotificationBotComponent);
    const app: TelegramBirthdayNotificationBotComponent = fixture.debugElement.componentInstance;
    expect(app.ngxImageGallery).toBeDefined();
  });

  it(`should open ngxImageGallery`, () => {
    const fixture = TestBed.createComponent(TelegramBirthdayNotificationBotComponent);
    const app: TelegramBirthdayNotificationBotComponent = fixture.debugElement.componentInstance;

    spyOn(app.ngxImageGallery, 'open');
    app.openGallery(0);
    expect(app.ngxImageGallery.open).toHaveBeenCalled();
  });

});
