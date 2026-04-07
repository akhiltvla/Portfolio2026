import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="exp-section">
      <div class="exp-container">
        <div class="exp-grid">
          <!-- Image column -->
          <div class="image-col">
            <div class="image-wrapper">
              <img alt="Profile Image" class="profile-img" src="images/ak_pencil.png"/>
              <!-- Geometric Accent -->
              <div class="accent-tl"></div>
              <div class="accent-br"></div>
            </div>
            <div class="image-bg-offset"></div>
          </div>
          <!-- Content column -->
          <div class="content-col">
            <h2 class="section-label">Structural Integrity</h2>
            <blockquote class="quote">
              "I see life as a waking dream, where every skyscraper and every line of code is a manifestation of human intent."
            </blockquote>
            
            <div class="stats-grid">
              <div class="stat-card border-p">
                <div class="stat-value">Civil Engineer</div>
                <div class="stat-label">Infrastructure</div>
              </div>
              <div class="stat-card border-s">
                <div class="stat-value">Full Stack</div>
                <div class="stat-label">Software</div>
              </div>
              <div class="stat-card border-o">
                <div class="stat-value">10+ Years Exp</div>
                <div class="stat-label">Combined</div>
              </div>
            </div>

            <!-- Timeline -->
            <div class="timeline-container">
              <div class="timeline-item" *ngFor="let exp of experiences">
                <div class="timeline-node" [ngClass]="exp.borderColor">
                  <div class="timeline-dot" [ngClass]="exp.bgColor"></div>
                </div>
                <h4 class="timeline-title">{{ exp.role }}</h4>
                <p class="timeline-period">{{ exp.period }}</p>
                <p class="timeline-desc">{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .exp-section {
      padding: 6rem 0;
      background-color: var(--color-surface-dim);
      position: relative;
    }
    .exp-container {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .exp-grid {
      display: grid;
      gap: 5rem;
      align-items: center;
      grid-template-columns: 1fr;
    }
    @media (min-width: 1024px) {
      .exp-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .image-col {
      position: relative;
    }
    .image-wrapper {
      position: relative;
      z-index: 10;
      border: 1px solid rgba(65, 71, 85, 0.3);
      padding: 1rem;
      aspect-ratio: 1 / 1;
    }
    .profile-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(1) brightness(0.75) contrast(1.25);
    }
    .accent-tl {
      position: absolute;
      top: -1rem;
      left: -1rem;
      width: 3rem;
      height: 3rem;
      border-top: 2px solid var(--color-primary);
      border-left: 2px solid var(--color-primary);
    }
    .accent-br {
      position: absolute;
      bottom: -1rem;
      right: -1rem;
      width: 3rem;
      height: 3rem;
      border-bottom: 2px solid var(--color-secondary);
      border-right: 2px solid var(--color-secondary);
    }
    .image-bg-offset {
      position: absolute;
      inset: 0;
      background-color: rgba(173, 198, 255, 0.05); /* primary/5 */
      transform: translate(-1.5rem, 1.5rem);
      z-index: 0;
    }
    .content-col { }
    .section-label {
      font-family: var(--font-label);
      color: var(--color-secondary);
      text-transform: uppercase;
      letter-spacing: 0.3em;
      font-size: 0.75rem;
      margin-bottom: 2rem;
    }
    .quote {
      font-family: var(--font-display);
      font-size: 1.875rem;
      font-weight: 300;
      font-style: italic;
      color: #e5e2e1; /* on-surface */
      margin-bottom: 3rem;
      line-height: 1.25;
    }
    @media (min-width: 768px) {
      .quote { font-size: 2.25rem; }
    }
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 4rem;
    }
    @media (min-width: 640px) {
      .stats-grid { grid-template-columns: repeat(3, 1fr); }
    }
    .stat-card {
      background-color: var(--color-surface-container-low);
      padding: 1.5rem;
      border-left: 2px solid;
    }
    .border-p { border-color: var(--color-primary); }
    .border-s { border-color: var(--color-secondary); }
    .border-o { border-color: var(--color-outline-variant); }
    .stat-value {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 0.25rem;
    }
    .stat-label {
      font-family: var(--font-label);
      font-size: 0.625rem;
      color: var(--color-outline-variant);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .timeline-container {
      position: relative;
    }
    .timeline-container::before {
      content: "";
      position: absolute;
      left: 11px;
      top: 0.5rem;
      bottom: 0.5rem;
      width: 1px;
      background-color: rgba(65, 71, 85, 0.3);
    }
    .timeline-item {
      position: relative;
      padding-left: 2.5rem;
      margin-bottom: 2rem;
    }
    .timeline-node {
      position: absolute;
      left: 0;
      top: 0.375rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      background-color: var(--color-background);
      border: 2px solid;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bc-primary { border-color: var(--color-primary); }
    .bc-secondary { border-color: var(--color-secondary); }
    .bc-outline { border-color: var(--color-outline-variant); }

    .timeline-dot {
      width: 0.375rem;
      height: 0.375rem;
      border-radius: 9999px;
    }
    .bg-primary { background-color: var(--color-primary); }
    .bg-secondary { background-color: var(--color-secondary); }
    .bg-outline { background-color: var(--color-outline-variant); }

    .timeline-title {
      font-family: var(--font-display);
      font-weight: 700;
      color: #e5e2e1; /* on-surface */
      text-transform: uppercase;
      letter-spacing: -0.025em;
    }
    .timeline-period {
      font-size: 0.875rem;
      color: var(--color-outline-variant);
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }
    .timeline-desc {
      font-size: 0.875rem;
      color: #c1c6d7; /* on-surface-variant */
      line-height: 1.5;
    }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      period: '2024 — 2026',
      role: 'Software Engineering Mastery',
      description: 'Full-stack pivot, mastering JS, Angular, React, Node.js and GIS.',
      borderColor: 'bc-primary',
      bgColor: 'bg-primary'
    },
    {
      period: '2017 — 2024',
      role: 'Civil Engineer / Contractor',
      description: 'Spearheaded variety of construction projects such as residential, commercial, MNCs and Government projects and managed client relationships.',
      borderColor: 'bc-secondary',
      bgColor: 'bg-secondary'
    },
    {
      period: '2014 — 2017',
      role: 'B.Tech Civil Engineering',
      // description: 'Graduated with honors, specialized in sustainable urban development.',
      borderColor: 'bc-outline',
      bgColor: 'bg-outline'
    }
  ];
}
