import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NB_WINDOW, NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit, AfterContentInit {
  collapse = true;
  itemsMenuUser = [{ title: 'Perfil' }, { title: 'Sair' }];
  items: NbMenuItem[] = [
    {
      title: 'Usuários',
      link: '/usuarios',
      icon: 'people-outline',
    },
    {
      title: 'Vagas',
      link: '/vagas',
      icon: 'briefcase-outline'
    },
    {
      title: 'Tipo de vagas',
      link: '/tipo-vagas',
      icon: 'funnel-outline'
    },
   ];

  constructor(
    private sidebarService: NbSidebarService,
    private router: Router,
    private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window) {
      this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title =>  {
        if (title === 'Sair') {
          return this.logout();
        }
        if (title === 'Perfil') {
          this.router.navigate([`/usuarios/criar-usuario`]);
        }
      });
  }

  ngAfterContentInit(): void {
    this.sidebarService.expand();
  }

  ngOnInit(): void {
    this.sidebarService.onExpand().subscribe(() => {
      this.collapse = false;
    });

    this.sidebarService.onToggle().subscribe(() => {
      this.collapse = !this.collapse;
    });
  }


  toggle(): void {
    console.log(this.collapse);
    this.sidebarService.toggle(true);
  }

  logout(): void {
    localStorage.removeItem('USERDATA');
    localStorage.removeItem('TOKEN');
    this.router.navigate(['/login']);
  }
}
