import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="portfolio-section">
      <div class="portfolio-container">
        <!-- Header -->
        <div class="header-row">
          <div>
            <h2 class="title">Manifestations</h2>
            <p class="subtitle">Selected Works Portfolio</p>
          </div>
          <div class="filters">
            <button class="filter-btn active">All</button>
            <button class="filter-btn">Construction</button>
            <button class="filter-btn">Web Dev</button>
          </div>
        </div>

        <!-- Grid -->
        <div class="projects-grid">
          <div class="project-card" *ngFor="let proj of projects">
            <div class="image-container">
              <img [src]="proj.img" [alt]="proj.title" class="project-img" />
              <div class="badge" [ngClass]="proj.badgeColor">{{ proj.category }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ proj.title }}</h3>
              <p class="card-desc">{{ proj.description }}</p>
              <div class="tags">
                <span class="tag" *ngFor="let tag of proj.tags">{{ tag }}</span>
              </div>
              <button class="details-btn">Details →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio-section {
      padding: 6rem 0;
      background-color: var(--color-background);
    }
    .portfolio-container {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .header-row {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 4rem;
    }
    @media (min-width: 768px) {
      .header-row {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
    .title {
      font-family: var(--font-display);
      font-size: clamp(2.25rem, 5vw, 3.75rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.05em;
    }
    .subtitle {
      font-family: var(--font-label);
      color: var(--color-secondary);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }
    .filters {
      display: flex;
      gap: 1rem;
    }
    .filter-btn {
      font-family: var(--font-label);
      font-size: 0.625rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-outline-variant);
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      padding-bottom: 0.25rem;
      cursor: pointer;
      transition: color 0.2s;
    }
    .filter-btn:hover { color: #e5e2e1; }
    .filter-btn.active {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .projects-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
      .projects-grid { grid-template-columns: repeat(3, 1fr); }
    }
    
    .project-card {
      background-color: var(--color-surface-container-low);
      overflow: hidden;
      border: 1px solid rgba(65, 71, 85, 0.1);
    }
    .project-card:hover .project-img {
      transform: scale(1.05);
    }
    .image-container {
      aspect-ratio: 4 / 3;
      overflow: hidden;
      position: relative;
    }
    .project-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      padding: 0.25rem 0.75rem;
      font-family: var(--font-label);
      font-size: 0.625rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.1em;
    }
    .bg-primary { background-color: var(--color-primary); color: #00285c; }
    .bg-secondary { background-color: var(--color-secondary); color: #004b65; }
    
    .card-content {
      padding: 2rem;
    }
    .card-title {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: -0.025em;
      margin-bottom: 0.5rem;
    }
    .card-desc {
      font-size: 0.875rem;
      color: #c1c6d7;
      line-height: 1.625;
      margin-bottom: 1.5rem;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    .tag {
      font-family: var(--font-label);
      font-size: 0.625rem;
      color: #8b90a0;
      text-transform: uppercase;
    }
    .details-btn {
      width: 100%;
      padding: 0.75rem 0;
      border: 1px solid var(--color-outline-variant);
      background: transparent;
      color: #e5e2e1;
      font-family: var(--font-label);
      font-size: 0.625rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .details-btn:hover {
      background-color: var(--color-surface-container-high);
    }
  `]
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Skyline Heights',
      description: 'Structural lead for a 45-story commercial tower featuring innovative earthquake dampening systems.',
      category: 'Construction',
      badgeColor: 'bg-primary',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATr-aUNAUbi0E4OCSOWxeJ9n_17afoenORkdb5RkF1m_EJMqBiBRb5ZnJvsYrMY-aDMmJUO6zvSEM5PR6WX4AHNjK1kKLr38sjORwQqwZwctynphQQoGD48hBXWH9qHb2cC7CFQee1Xti8tJb-A8L-PkpRtv4pCe49LR1k_GxbaLLf6F4WWSlyWG0SRWdXQyXQYu8rOD16Zvt9cPog7utQYsaAGPrZ9bSbo8d-WOgiO0wDbHqhelTddjTB-QH6WPcdWuat9DjX4P7O',
      tags: ['SAP2000', 'Project Mgmt']
    },
    {
      title: 'Forge SaaS Platform',
      description: 'Full-stack project management tool built specifically for small-scale construction firm logistics.',
      category: 'Web Dev',
      badgeColor: 'bg-secondary',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTj8Ix1nBFgfYOfBQV8ANlcXFP-vPETW9BNV-Jz7qSFCT1pjyKWp5LyC6206mbYP2eQhHXSpVA5I8hi5_5NO-RmDNAS1tO1sCP5O0ibsZ0RwyPJdIASQevAfkgE2hqtJ5G49yGWeaq72Ql8-hSiLRvC9pMmRMfjHSDX2ghd0QLlY-eAOfyNdjQgiYfgVd5wqzy__ule7zR9iE4TU-TyrhUdVv9IAlZHFec3g2_5Eolrj6FC0V6IoS81I9LO1AeIAUpc2tuAnfjGsD6',
      tags: ['React', 'Node.js']
    },
    {
      title: 'Bridge Logic AI',
      description: 'A neural network model designed to predict structural fatigue in suspension bridges.',
      category: 'Hybrid',
      badgeColor: 'bg-primary',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw0iRRYAno1zgzWPiDOloniIPuilRhu2plEqnDe6HWxjDOWRcmsGaHO_Ciul-5zbfpjcxAnz3wrB2kUQeCoR_tqBC4_Lry-1ziykhfA-gBRgjWpvJGUxQG_hVM3-d__378qfajteDvoDLRsiybvvWmqMkhtfgbQJh9Vofpk2BK-DxzxgLamnSA23MN1FRTYLfkhOAIAu7KAOHU7TBBP9mE7cBqk3P1HMZ6p7iytXSzvLLB-y6CEG105MfDRVBAzq2D7NHP9tCgj-3e',
      tags: ['Python', 'AutoCAD API']
    }
  ];
}
