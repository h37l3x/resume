

import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, RouterOutlet } from '@angular/router';
import { Component, ElementRef, HostBinding, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { filter, map } from 'rxjs/operators';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  @HostBinding('@routeAnimations') routeAnimations = true;

  isMenuOpened = false;
  onMainPage = false;
  onResumePage = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private changeDetector: ChangeDetectorRef) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute.snapshot),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.onMainPage = route.data && (route.data.state === 'root' || route.data.state === 'home');
        this.onResumePage = route.data && (route.data.state === 'resume');
      });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  closeMenu() {
    this.animateMenu('.main-menu:not(.permanent)', 'zoomOut', () => {
    });
    this.isMenuOpened = false;
    document.body.style.overflow = 'auto';

    const node: any = document.querySelector('.main-menu:not(.permanent)');
    node.style.display = 'none';

    this.changeDetector.detectChanges();

  }

  openMenu() {
    this.isMenuOpened = true;
    const node: any = document.querySelector('.main-menu:not(.permanent)');
    node.style.display = 'block';
    document.body.style.overflow = 'hidden';
    this.animateMenu('.main-menu:not(.permanent)', 'slideInDown');
  }

  isStateEquals(str: string) {
    return this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.children &&
      this.activatedRoute.snapshot.children[0] &&
      this.activatedRoute.snapshot.children[0].data.state &&
      this.activatedRoute.snapshot.children[0].data.state === str;
  }

  animateMenu(element, animationName, callback = null) {
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
      node.classList.remove('animated', animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      if (typeof callback === 'function') { callback(); }
    }

    node.addEventListener('animationend', handleAnimationEnd);
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}

@Component({
  selector: 'app-smooth-height',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  animations: [
    trigger('grow', [
      transition('void <=> *', []),
      transition('* <=> *', [
        style({ height: '{{startHeight}}px', opacity: 0 }),
        animate('.3s .3s ease'),
      ], { params: { startHeight: 0 } })
    ])
  ]
})
export class SmoothHeightComponent implements OnChanges {
  @Input()
  trigger: string;

  startHeight: number;

  constructor(private element: ElementRef) { }

  @HostBinding('@grow') get grow() {
    return { value: this.trigger, params: { startHeight: this.startHeight } };
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges() {
    this.setStartHeight();
  }
}
