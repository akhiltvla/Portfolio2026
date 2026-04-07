import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolkit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="toolkit-section">
      <div class="toolkit-container">
        <div class="header">
          <h2 class="title">The Toolkit</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="grid-cards">
          <!-- Card 1 -->
          <div class="tool-card">
            <span class="material-symbols-outlined icon text-primary">architecture</span>
            <h3 class="card-title">Civil Engineering</h3>
            <ul class="skill-list">
              <li><span class="bullet bg-primary"></span> Structural Design</li>
              <li><span class="bullet bg-primary"></span> Site Coordination</li>
              <li><span class="bullet bg-primary"></span> Materials Science</li>
            </ul>
          </div>
          <!-- Card 2 -->
          <div class="tool-card">
            <span class="material-symbols-outlined icon text-secondary">construction</span>
            <h3 class="card-title">Construction</h3>
            <ul class="skill-list">
              <li><span class="bullet bg-secondary"></span> Site Management</li>
              <li><span class="bullet bg-secondary"></span> Safety Compliance</li>
              <li><span class="bullet bg-secondary"></span> Quality Assurance</li>
            </ul>
          </div>
          <!-- Card 3 -->
          <div class="tool-card">
            <span class="material-symbols-outlined icon text-tertiary">terminal</span>
            <h3 class="card-title">Development</h3>
            <div class="chip-group">
               <span class="chip">Angular</span>
              <span class="chip">React</span>
              <span class="chip">Node.js</span>
              <span class="chip">JS</span>
              <span class="chip">TypeScript</span>
              <span class="chip">MongoDB</span>
            </div>
          </div>
        </div>

        <!-- Tool Icons Row -->
        <div class="tools-row">
          <div class="tool-name">AutoCAD</div>
          <div class="tool-name">Revit</div>
          <div class="tool-name">ETABS</div>
          <div class="tool-name">Git</div>
          <div class="tool-name">Docker</div>
        </div>

        <!-- Problem Solving Chips Row -->
        <div class="skills-row">
          <span class="skill-chip">Problem Solving</span>
          <span class="skill-chip">Collaboration</span>
          <span class="skill-chip">Systems Thinking</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .toolkit-section {
      padding: 6rem 0;
      background-color: var(--color-surface-container-lowest);
    }
    .toolkit-container {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .header {
      text-align: center;
      margin-bottom: 5rem;
    }
    .title {
      font-family: var(--font-display);
      font-size: clamp(2.25rem, 5vw, 3.75rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.05em;
      margin-bottom: 1rem;
    }
    .title-underline {
      width: 6rem;
      height: 0.25rem;
      background-color: var(--color-primary);
      margin: 0 auto;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .grid-cards { grid-template-columns: repeat(3, 1fr); }
    }
    .tool-card {
      background-color: var(--color-surface-container);
      padding: 2rem;
      border-radius: 0.125rem;
      border: 1px solid rgba(65, 71, 85, 0.1);
      transition: all 0.3s ease;
    }
    .tool-card:hover {
      background-color: var(--color-surface-container-high);
    }
    .icon {
      font-size: 2.25rem;
      margin-bottom: 1.5rem;
      display: block;
    }
    .text-primary { color: var(--color-primary); }
    .text-secondary { color: var(--color-secondary); }
    .text-tertiary { color: rgba(255, 181, 149, 1); /* tertiary */ }
    
    .card-title {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      letter-spacing: -0.025em;
    }
    .skill-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-family: var(--font-body);
      font-size: 0.875rem;
      color: #c1c6d7;
    }
    .skill-list li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .bullet {
      width: 0.375rem;
      height: 0.375rem;
    }
    .bg-primary { background-color: var(--color-primary); }
    .bg-secondary { background-color: var(--color-secondary); }
    
    .chip-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .chip {
      padding: 0.25rem 0.5rem;
      background-color: var(--color-surface-container-highest);
      font-family: var(--font-label);
      font-size: 0.625rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-outline-variant); /* #414755 is very dark, wait, let's use a lighter color for visibility */
      color: #8b90a0;
    }
    .tools-row {
      margin-top: 4rem;
      padding-top: 3rem;
      border-top: 1px solid rgba(65, 71, 85, 0.2);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
      filter: grayscale(1);
      opacity: 0.5;
      transition: all 0.3s ease;
    }
    .tools-row:hover {
      filter: grayscale(0);
      opacity: 1;
    }
    .tool-name {
      font-family: var(--font-label);
      font-size: 0.875rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.2em;
    }
    .skills-row {
      margin-top: 4rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
    }
    .skill-chip {
      padding: 0.5rem 1.5rem;
      border-radius: 9999px;
      border: 1px solid rgba(65, 71, 85, 0.3);
      font-size: 0.75rem;
      font-family: var(--font-label);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #c1c6d7;
    }
  `]
})
export class ToolkitComponent {}
