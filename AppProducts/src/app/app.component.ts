import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppProducts';
  showMenu: boolean = true; 

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.router.events.subscribe(() => {
      
      const currentRoute = this.router.url;
      if (currentRoute === '/home') {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    });
  }
}
