import { Component } from '@angular/core';

@Component({
  selector: 'app-impact',
  standalone: true,
  template: `
    <section class="impact-section">
      <div class="impact-container">
        <h2 class="title">Impact Analytics</h2>
        
        <div class="case-card">
          <div class="case-split">
            <!-- Image Area -->
            <div class="image-area">
              <img alt="Large construction site" class="case-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNmDmLCdxLzkTKP_vIieqkC04KhnIK7JLU03JgfDEEHJChlaS3Kh4IOXgwQAt8bNWGyuyMv4hx5PU1d0I6ar12aAkuRCLrY2Zdb-UutUgE9PGJAnWaudbRYoFDLQcoZKzw8Xl42qlBnHZrXiQ-7ZAT4uPjllPcoPmvNmO6HUfVXQMxjsU33fRYpkUVlgTTkaD4N9rcZCYi64273A3D1Pxglp9V8ZaVtppxtqk-n2f_EM-YK91SEQ_PS6H-s0Qokvdkothnt3QVrIeI" />
              <div class="gradient-overlay"></div>
              <div class="image-content">
                <h3>Central Bridge Reconstruction</h3>
                <p>Infrastructure Optimization Case Study</p>
              </div>
            </div>
            <!-- Details Area -->
            <div class="details-area">
              <div class="detail-item">
                <h5>Goal</h5>
                <p>Reduce material waste by 10% using data-driven scheduling.</p>
              </div>
              <div class="detail-item">
                <h5>Approach</h5>
                <p>Implemented custom BIM integration software with real-time site tracking.</p>
              </div>
              <div class="detail-item">
                <h5>Outcome</h5>
                <div class="metric">15%</div>
                <p class="metric-label">Increase in Operational Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .impact-section {
      padding: 6rem 0;
      background-color: var(--color-background);
      overflow: hidden;
    }
    .impact-container {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .title {
      font-family: var(--font-display);
      font-size: clamp(2.25rem, 4vw, 2.25rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.05em;
      margin-bottom: 4rem;
    }
    .case-card {
      position: relative;
      background-color: var(--color-surface-container-low);
      padding: 0.25rem;
      border: 1px solid rgba(65, 71, 85, 0.2);
    }
    .case-split {
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 768px) {
      .case-split { flex-direction: row; }
    }
    .image-area {
      position: relative;
      min-height: 24rem;
      flex: 2;
    }
    .case-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(1) brightness(0.5);
      position: absolute;
      inset: 0;
    }
    .gradient-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, var(--color-surface-container-low), transparent, transparent);
    }
    .image-content {
      position: absolute;
      bottom: 2rem;
      left: 2rem;
      color: #e5e2e1;
      z-index: 10;
    }
    .image-content h3 {
      font-family: var(--font-display);
      font-size: 1.875rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .image-content p {
      font-family: var(--font-label);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      opacity: 0.7;
    }
    .details-area {
      flex: 1;
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      background-color: var(--color-surface-container);
    }
    .detail-item h5 {
      font-family: var(--font-label);
      font-size: 0.625rem;
      text-transform: uppercase;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    .detail-item p {
      font-size: 0.875rem;
      color: #c1c6d7;
    }
    .metric {
      font-family: var(--font-display);
      font-size: 2.25rem;
      font-weight: 900;
      color: var(--color-secondary);
    }
    .metric-label {
      font-family: var(--font-label) !important;
      font-size: 0.625rem !important;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-outline-variant) !important;
    }
  `]
})
export class ImpactComponent {}
