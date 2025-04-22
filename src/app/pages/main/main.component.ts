import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'soms-main',
  imports: [AboutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
