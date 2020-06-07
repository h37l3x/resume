

import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, RouterOutlet } from '@angular/router';
import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';

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
        this.onResumePage = route.data && (route.data.state === 'resume');
      });
  }

  closeMenu() {
    this.animateMenu('.main-menu:not(.permanent)', 'zoomOut', () => { });
    this.isMenuOpened = false;
    document.body.style.overflow = 'auto';

    const node: any = document.querySelector('.main-menu:not(.permanent)');
    node.style.display = 'none';
  }

  openMenu() {
    this.isMenuOpened = true;
    const node: any = document.querySelector('.main-menu:not(.permanent)');
    node.style.display = 'block';
    document.body.style.overflow = 'hidden';
    this.animateMenu('.main-menu:not(.permanent)', 'slideInDown');
  }

  private animateMenu(element, animationName, callback = null) {
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
      node.classList.remove('animated', animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      callback();
    }

    node.addEventListener('animationend', handleAnimationEnd);
  }
}
