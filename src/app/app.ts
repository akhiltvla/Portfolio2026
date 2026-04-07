import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero.component';
import { ExperienceComponent } from './components/experience.component';
import { ToolkitComponent } from './components/toolkit.component';
import { PortfolioComponent } from './components/portfolio.component';
import { CapabilitiesComponent } from './components/capabilities.component';
import { ImpactComponent } from './components/impact.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    ExperienceComponent,
    ToolkitComponent,
    PortfolioComponent,
    CapabilitiesComponent,
    ImpactComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
