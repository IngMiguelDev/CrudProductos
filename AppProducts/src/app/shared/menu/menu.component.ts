import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent  implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
      this.getMenuItems();
  }

  getMenuItems() {
    this.items = [
      {
        label: 'Recursos',
        icon: 'pi pi-fw pi-file',
        scaped: false,
        items: [
          {
            label: 'Primeng',
            icon: 'pi pi-fw pi-prime',
            url: 'https://www.primefaces.org/primeng-v16-lts/installation'
          },
          {
            label: 'Sequelize',
            icon: 'pi pi-fw pi-server',
            url: 'https://sequelize.org/docs/v6/getting-started/'
          },
          {
            label: 'PrimeFlex',
            icon: 'pi pi-fw pi-prime',
            url: 'https://sequelize.org/docs/v6/getting-started/'
          },
          {
            label: 'Repo de productos',
            icon: 'pi pi-fw pi-github',
            url: 'https://github.com/IngMiguelDev/CrudProductos/tree/develop'
          },
        ]
      }]
  }
}
