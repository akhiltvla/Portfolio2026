import { Component } from '@angular/core';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  template: `
    <section class="capabilities-section">
      <div class="capabilities-container">
        <div class="grid-content">
          <!-- Left Column -->
          <div>
            <h2 class="title">Core Capabilities</h2>
            <div class="services">
              <div class="service-card border-p">
                <h4 class="service-title">Structural Consulting</h4>
                <p class="service-desc">Expert analysis of load-bearing structures and material durability.</p>
              </div>
              <div class="service-card border-s">
                <h4 class="service-title">Site Supervision</h4>
                <p class="service-desc">Real-time management of construction workflows and safety protocols.</p>
              </div>
              <div class="service-card border-p">
                <h4 class="service-title">Full-Stack Development</h4>
                <p class="service-desc">End-to-end digital solutions from UI design to scalable backend logic.</p>
              </div>
              <div class="service-card border-s">
                <h4 class="service-title">Rapid Prototyping</h4>
                <p class="service-desc">Converting complex engineering concepts into interactive MVPs.</p>
              </div>
            </div>
          </div>
          <!-- Right Column -->
          <div class="pipeline-container">
            <h3 class="pipeline-title">Execution Pipeline</h3>
            <div class="pipeline">
              
              <div class="step">
                <div class="step-left text-right">
                  <h5 class="step-label text-sec">Discover</h5>
                </div>
                <div class="step-node bg-sec"></div>
                <div class="step-right">
                  Requirement Analysis
                </div>
              </div>

              <div class="step">
                <div class="step-left text-right">
                  Blueprinting & UI
                </div>
                <div class="step-node bg-pri"></div>
                <div class="step-right">
                  <h5 class="step-label text-pri">Design</h5>
                </div>
              </div>

              <div class="step">
                <div class="step-left text-right">
                  <h5 class="step-label text-sec">Deliver</h5>
                </div>
                <div class="step-node bg-sec"></div>
                <div class="step-right">
                  Deployment & QA
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .capabilities-section {
      padding: 6rem 0;
      background-color: var(--color-surface-dim);
    }
    .capabilities-container {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .grid-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 5rem;
    }
    @media (min-width: 1024px) {
      .grid-content { grid-template-columns: 1fr 1fr; }
    }
    .title {
      font-family: var(--font-display);
      font-size: clamp(2.25rem, 4vw, 2.25rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.05em;
      margin-bottom: 3rem;
    }
    .services {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .service-card {
      padding: 1.5rem;
      background-color: var(--color-surface-container);
      border-left: 4px solid;
      transition: transform 0.2s;
    }
    .service-card:hover { border-color: rgba(65, 71, 85, 0.4); } /* placeholder transition */
    @media (hover: hover) { .service-card:hover { transform: translateX(0.5rem); } }
    
    .border-p { border-color: var(--color-primary); }
    .border-s { border-color: var(--color-secondary); }
    
    .service-title {
      font-family: var(--font-display);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: -0.025em;
      margin-bottom: 0.5rem;
    }
    .service-desc {
      font-size: 0.875rem;
      color: #c1c6d7;
    }
    .pipeline-container {
      background-color: var(--color-surface-container-lowest);
      padding: 2.5rem;
      border: 1px solid rgba(65, 71, 85, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    .pipeline-container::after {
      content: "";
      position: absolute;
      inset: 0;
      background-image: linear-gradient(to right, rgba(65, 71, 85, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(65, 71, 85, 0.1) 1px, transparent 1px);
      background-size: 24px 24px;
      pointer-events: none;
      z-index: 0;
    }
    .pipeline-title {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;
      position: relative;
      z-index: 10;
    }
    .pipeline {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      position: relative;
      z-index: 10;
    }
    .pipeline::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: rgba(65, 71, 85, 0.3);
    }
    .step {
      display: flex;
      align-items: center;
      gap: 2rem;
      position: relative;
    }
    .step-left, .step-right {
      width: 50%;
      font-size: 0.875rem;
      color: var(--color-outline-variant);
      font-family: var(--font-body);
    }
    .text-right { text-align: right; }
    
    .step-node {
      width: 1rem;
      height: 1rem;
      border-radius: 9999px;
      border: 4px solid var(--color-surface-container-lowest);
      z-index: 10;
      flex-shrink: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .bg-pri { background-color: var(--color-primary); }
    .bg-sec { background-color: var(--color-secondary); }
    
    .text-pri { color: var(--color-primary); }
    .text-sec { color: var(--color-secondary); }
    
    .step-label {
      font-family: var(--font-label);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  `]
})
export class CapabilitiesComponent {}
