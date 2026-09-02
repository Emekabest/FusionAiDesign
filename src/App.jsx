import './App.css'

function App() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">FUSION A.I.</div>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="menu-btn">Menu</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">INTERIOR DESIGN · HOSPITALITY · PROCUREMENT</p>

          <h1>
            Spaces
            <br />
            <span>with a story.</span>
          </h1>

          <p className="hero-description">
            We create distinctive hospitality interiors that bring together
            thoughtful design, functionality and unforgettable experiences.
          </p>

          <a href="#work" className="hero-link">
            Explore our work <span>↗</span>
          </a>
        </div>

        <div className="hero-number">01 / 04</div>
      </section>

      <section className="intro" id="studio">
        <p className="section-label">01 — THE STUDIO</p>

        <div className="intro-content">
          <h2>
            Great design happens when vision meets
            <em> purpose.</em>
          </h2>

          <p>
            Fusion A.I. Design is an interior design studio creating
            memorable spaces for the hospitality industry. From concept to
            completion, we bring creativity and precision together to create
            environments people remember.
          </p>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="section-label">02 — SELECTED WORK</p>
          <h2>Our work</h2>
        </div>

        <div className="project-grid">
          <article className="project project-large">
            <div className="project-image image-one"></div>
            <div className="project-info">
              <div>
                <h3>Embassy Suites</h3>
                <p>Hospitality · Knoxville</p>
              </div>
              <span>↗</span>
            </div>
          </article>

          <article className="project">
            <div className="project-image image-two"></div>
            <div className="project-info">
              <div>
                <h3>AC Hotel</h3>
                <p>Hospitality · Durham</p>
              </div>
              <span>↗</span>
            </div>
          </article>

          <article className="project">
            <div className="project-image image-three"></div>
            <div className="project-info">
              <div>
                <h3>Hyatt House</h3>
                <p>Hospitality · Atlanta</p>
              </div>
              <span>↗</span>
            </div>
          </article>
        </div>
      </section>

      <section className="services" id="services">
        <p className="section-label">03 — WHAT WE DO</p>

        <div className="services-header">
          <h2>From first sketch<br />to final detail.</h2>
        </div>

        <div className="service-list">
          <div className="service">
            <span>01</span>
            <h3>Interior Design</h3>
            <p>Creating thoughtful environments built around your vision.</p>
          </div>

          <div className="service">
            <span>02</span>
            <h3>Procurement</h3>
            <p>Managing the details that bring every design to life.</p>
          </div>

          <div className="service">
            <span>03</span>
            <h3>Turnkey Millwork</h3>
            <p>Custom solutions designed specifically for each space.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">04 — START A PROJECT</p>

        <h2>
          Let's create
          <br />
          something <em>remarkable.</em>
        </h2>

        <a href="mailto:info@fusionaidesign.com" className="contact-link">
          Get in touch ↗
        </a>
      </section>

      <footer>
        <div>FUSION A.I. DESIGN</div>
        <div>© 2026</div>
      </footer>
    </main>
  )
}

export default App