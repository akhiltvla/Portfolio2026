import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact-section" id="contact">
      <div class="contact-container">
        <div class="text-center">
          <h2 class="title">Initialize Contact</h2>
          <p class="desc">Ready to build the next generation of physical or digital structures? Let's connect.</p>
        </div>

        <form action="https://formsubmit.co/akhiltvla@gmail.com" method="POST" class="contact-form">
          <!-- FormSubmit configuration -->
          <input type="hidden" name="_subject" value="New submission from Architect.Dev Portfolio!">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_captcha" value="false">

          <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter Full Name" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="name@domain.com" required />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea name="message" rows="4" placeholder="Project details or collaboration inquiry..." required></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Send Message</button>
            <!-- <button type="button" class="btn btn-secondary flex-center">
              <span class="material-symbols-outlined nav-icon" style="font-size: 1rem; margin-right: 0.5rem;">download</span>
              Resume
            </button> -->
          </div>
        </form>

        <div class="social-footer">
          <a href="#" class="social-link">
            <span class="material-symbols-outlined">link</span> LinkedIn
          </a>
          <a href="#" class="social-link">
            <span class="material-symbols-outlined">code</span> GitHub
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="copyright">
        © 2026 CODER HOBBIT. ALL RIGHTS RESERVED.
      </div>
      <div class="footer-links">
        <a href="https://www.linkedin.com/in/akhiltvla">LinkedIn</a>
        <a href="https://github.com/akhiltvla">GitHub</a>
        <a href="#">Source</a>
      </div>
    </footer>
  `,
  styles: [`
    .contact-section {
      padding: 6rem 0;
      background-color: var(--color-surface-container-lowest);
      position: relative;
    }
    .contact-section::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: linear-gradient(to right, rgba(65, 71, 85, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(65, 71, 85, 0.1) 1px, transparent 1px);
      background-size: 24px 24px;
      pointer-events: none;
    }
    .contact-container {
      max-width: 48rem;
      margin: 0 auto;
      padding: 0 1.5rem;
      position: relative;
      z-index: 10;
    }
    .text-center { text-align: center; margin-bottom: 4rem; }
    .title {
      font-family: var(--font-display);
      font-size: clamp(2.25rem, 5vw, 3rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.05em;
      margin-bottom: 1rem;
    }
    .desc {
      font-size: 1.125rem;
      color: #c1c6d7;
      line-height: 1.625;
    }
    .contact-form {
      background-color: rgba(19, 19, 19, 0.8);
      backdrop-filter: blur(4px);
      padding: 2.5rem;
      border: 1px solid rgba(65, 71, 85, 0.1);
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .form-group label {
      display: block;
      font-family: var(--font-label);
      font-size: 0.625rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--color-outline-variant);
      margin-bottom: 0.75rem;
    }
    .form-group input, .form-group textarea {
      width: 100%;
      background-color: var(--color-surface-container-lowest);
      border: none;
      border-bottom: 1px solid var(--color-outline-variant);
      color: #e5e2e1;
      padding: 0.5rem 0;
      font-family: var(--font-body);
      transition: all 0.2s;
    }
    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    .form-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    @media (min-width: 640px) {
      .form-actions { flex-direction: row; }
    }
    .btn {
      font-family: var(--font-display);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 1rem 2rem;
      border-radius: 0.125rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-primary {
      flex: 1;
      background: linear-gradient(to right, var(--color-primary), var(--color-primary-container));
      color: #00285c;
      border: none;
      box-shadow: 0 0 20px rgba(173, 198, 255, 0.2);
    }
    .btn-secondary {
      background: transparent;
      border: 1px solid var(--color-outline-variant);
      color: #e5e2e1;
      padding: 1rem 2rem;
    }
    .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .social-footer {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
      gap: 2.5rem;
    }
    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-label);
      font-size: 0.625rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-outline-variant);
      text-decoration: none;
      transition: color 0.2s;
    }
    .social-link:hover { color: var(--color-primary); }
    
    .footer {
      background-color: #020617; /* slate-950 */
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      border-top: 1px solid #0f172a;
    }
    @media (min-width: 768px) {
      .footer {
        flex-direction: row;
        justify-content: space-between;
      }
    }
    .copyright {
      font-family: var(--font-display);
      font-size: 0.625rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #475569;
    }
    .footer-links {
      display: flex;
      gap: 2rem;
    }
    .footer-links a {
      font-family: var(--font-display);
      font-size: 0.625rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #475569;
      text-decoration: none;
    }
    .footer-links a:hover { color: #93c5fd; }
  `]
})
export class ContactComponent {}
