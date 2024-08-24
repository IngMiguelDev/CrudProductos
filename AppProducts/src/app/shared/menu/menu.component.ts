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
        label: 'Documentación',
        icon: 'pi pi-fw pi-file',
        scaped: false,
        items: [
          {
            label: 'Primeng',
            icon: 'pi pi-fw pi-prime',
            url: 'https://www.primefaces.org/primeng-v16-lts/installation'
          },
        ]
      }]
  }
}
