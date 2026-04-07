import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section">
      <!-- Background Layer -->
      <div class="hero-bg">
        <div class="bg-grid"></div>
        <div class="bg-gradient-split"></div>
        <div class="bg-gradient-up"></div>
      </div>
      <div class="hero-content">
        <div class="badge">
            <span class="badge-text">System Initialized</span>
        </div>
        <h1 class="headline">Dream-driven <span class="highlight">civil engineer</span> and software developer.</h1>
        <p class="subhead">Construction-tested, web-ready—turning curiosity into built reality. Bridging the gap between physical infrastructure and digital ecosystems.</p>
        <div class="cta-actions">
            <button class="btn btn-primary">View Portfolio</button>
            <button class="btn btn-secondary" (click)="scrollToContact()">Contact Me</button>
        </div>
      </div>
      <!-- Technical Specs Overlay -->
      <div class="tech-specs">
        <div class="specs-list">
            <div>LAT: 40.7128° N</div>
            <div>LNG: 74.0060° W</div>
            <div>STATUS: ACTIVE_DEV</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
      display: flex;
    }
    .bg-grid {
      width: 50%;
      height: 100%;
      background-color: var(--color-surface-container-lowest);
      opacity: 0.4;
      background-image: linear-gradient(to right, rgba(65, 71, 85, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(65, 71, 85, 0.1) 1px, transparent 1px);
      background-size: 24px 24px;
    }
    .bg-gradient-split {
      width: 50%;
      height: 100%;
      background: linear-gradient(to bottom right, var(--color-surface-container-lowest), rgba(0, 40, 92, 0.2));
    }
    .bg-gradient-up {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, var(--color-background), transparent, transparent);
    }
    .hero-content {
      position: relative;
      z-index: 10;
      padding: 0 1.5rem;
      max-width: 80rem; /* max-w-7xl */
      margin: 0 auto;
      width: 100%;
    }
    .badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      margin-bottom: 1.5rem;
      background-color: var(--color-surface-container-highest);
      border: 1px solid rgba(65, 71, 85, 0.2);
    }
    .badge-text {
      font-family: var(--font-label);
      font-size: 0.625rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--color-secondary);
    }
    .headline {
      font-family: var(--font-display);
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 900;
      letter-spacing: -0.05em;
      line-height: 1;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      max-width: 56rem;
    }
    .highlight {
      color: var(--color-primary);
    }
    .subhead {
      font-family: var(--font-body);
      font-size: 1.125rem;
      color: #c1c6d7;
      max-width: 36rem;
      margin-bottom: 2.5rem;
      line-height: 1.625;
    }
    .cta-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    @media (min-width: 640px) {
      .cta-actions {
        flex-direction: row;
      }
    }
    .btn {
      font-family: var(--font-display);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 1rem 2rem;
      border-radius: 0.125rem;
      transition: transform 0.2s, background-color 0.2s;
      cursor: pointer;
    }
    .btn-primary {
      background: linear-gradient(to right, var(--color-primary), var(--color-primary-container));
      color: #00285c;
      box-shadow: 0 0 20px rgba(173, 198, 255, 0.3);
      border: none;
    }
    .btn-primary:hover {
      transform: scale(1.02);
    }
    .btn-secondary {
      border: 1px solid var(--color-outline-variant);
      background: transparent;
      color: #e5e2e1;
    }
    .btn-secondary:hover {
      background-color: var(--color-surface-container-high);
    }
    .tech-specs {
      position: absolute;
      bottom: 2.5rem;
      right: 2.5rem;
      display: none;
      text-align: right;
    }
    @media (min-width: 1024px) {
      .tech-specs {
        display: block;
      }
    }
    .specs-list {
      font-family: var(--font-label);
      font-size: 0.625rem;
      color: var(--color-outline-variant);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      line-height: 1.5;
    }
  `]
})
export class HeroComponent {
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
