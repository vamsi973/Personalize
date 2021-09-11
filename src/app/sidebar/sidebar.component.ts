import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ROUTES } from './menuItems';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideMenuItemsList = ROUTES;
  toogle: Boolean = true;
  constructor(private router: Router) { }
  @Input() sideBarToggle:Boolean;

  ngOnInit(): void {
    // console.log(this.showMinisidebar, 278)
  }
  navigateTo(routePath) {
    this.router.navigateByUrl(routePath);
  }

  toggleMenuEvent(event) {
    console.log(event, 78);
  }

}
