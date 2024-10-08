import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbMenuService, NbPosition } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pemission: boolean;
  items = [
    {
      title: 'Logout',
    },
  ];
  contextMenuPlacement = NbPosition.BOTTOM;
  menuItems = [
    {
      title: 'Profile',

    },
    {
      title: 'Change Password',

    },
    {
      title: 'Privacy Policy',

    },
    {
      title: 'Logout',
    },
  ];

  private destroy$ = new Subject<void>();
  selectedItem: string;

  constructor(
    private router: Router,
    private menuService: NbMenuService ) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.pemission = !res.url.includes('login');
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addMenuItem() {
    this.menuService.addItems([{
      title: '@nebular/theme',
      target: '_blank',
      icon: 'plus-outline',
      url: 'https://github.com/akveo/ngx-admin',
    }], 'menu');
  }

  collapseAll() {
    this.menuService.collapseAll('menu');
  }

  navigateHome() {
    this.menuService.navigateHome('menu');
  }

  getSelectedItem() {
    this.menuService.getSelectedItem('menu')
      .pipe(takeUntil(this.destroy$))
      .subscribe( (menuBag) => {
        this.selectedItem = menuBag.item.title;
      });
  }





}

