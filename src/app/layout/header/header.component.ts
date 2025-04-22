import { Component } from '@angular/core';

@Component({
  selector: 'soms-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMobileMenuVisible: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
}
