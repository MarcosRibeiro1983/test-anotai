// Angular import
import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  // public props
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();
  windowWidth: number;
  navCollapsedMob;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  
    this.navCollapsedMob = false;
  }


  @HostListener('window:resize', ['$event'])
  // eslint disable-next-line
  onResize(event: any): void {
    this.windowWidth = event.target.innerWidth;
  }

  
}
