import './App.css'
import './ContactPage.css'
import heroVideo from '../assets/media.mp4'
import lobbyOneImage from '../assets/Lobby1.jpg'
import lobbyTwoImage from '../assets/Lobby2.jpeg'
import lobbyThreeImage from '../assets/Lobby3.jpg'
import aliceImage from '../assets/Alice.jpg'
import elaineImage from '../assets/Elaine.jpg'
import { useEffect, useState } from 'react'

function ContactPage({ onBack }) {
  return (
    <main className="contact-page" aria-label="Contact Us page">
      <section className="contact-page__hero">
        <div className="contact-page__hero-copy">
          <p className="contact-page__eyebrow">Contact Us</p>
          <h1>Start your project with a conversation.</h1>
          <p>
            Based in Atlanta, Georgia serving the united States.
          </p>
        </div>

        <div className="contact-page__details-card">
          <p className="contact-page__details-label">Studio</p>
          <h2>4595 Towne Lake Pkwy Bldg. 100</h2>
          <p className="contact-page__address-line">Suite 120 Woodstock, GA 30189</p>
          <p className="contact-page__phone">770.485.5086</p>
          <a
            className="contact-page__map-link"
            href="https://maps.google.com/maps?ll=34.130044,-84.574455&z=12&t=m&hl=en&gl=US&mapclient=apiv3"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      <section className="contact-page__content">
        <aside className="contact-page__info-panel">
          <p className="contact-page__info-eyebrow">Tell us about your space</p>
          <h2>We&apos;ll help you shape the plan, the pace, and the finish.</h2>
          <p>
            Share a few details and we&apos;ll get back to you with a clear next step. The form is designed to keep the process simple, direct, and easy to review.
          </p>
          <button className="contact-page__back" type="button" onClick={onBack}>
            Back to Home
          </button>
        </aside>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div className="contact-form__grid">
            <label className="contact-form__field contact-form__field--full">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>

            <label className="contact-form__field">
              <span>Email Address(required)</span>
              <input type="email" name="email" required placeholder="you@example.com" />
            </label>

            <label className="contact-form__field">
              <span>Phone</span>
              <input type="tel" name="phone" placeholder="(555) 555-5555" />
            </label>

            <label className="contact-form__field contact-form__field--full">
              <span>Where is your project located?</span>
              <input type="text" name="location" placeholder="City, state, or ZIP" />
            </label>

            <label className="contact-form__field">
              <span>Property Type</span>
              <select name="propertyType" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
              </select>
            </label>

            <label className="contact-form__field">
              <span>Project Type</span>
              <select name="projectType" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="new-construction">New Construction</option>
                <option value="renovation">Renovation</option>
              </select>
            </label>

            <label className="contact-form__field contact-form__field--full">
              <span>Describe Project Scope</span>
              <textarea name="scope" rows="5" placeholder="Tell us about the rooms, goals, and timeline."></textarea>
            </label>

            <label className="contact-form__field contact-form__field--full">
              <span>How did you hear about us?(required)</span>
              <input type="text" name="referral" required placeholder="Friend, Instagram, search, etc." />
            </label>
          </div>

          <button className="site-header__getstarted contact-form__submit" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'home'
    }

    return window.location.pathname === '/contact' ? 'contact' : 'home'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [cardsOverlapHero, setCardsOverlapHero] = useState(false)
  const [headerSolid, setHeaderSolid] = useState(false)
  const [serviceCardOpen, setServiceCardOpen] = useState({
    online: false,
    inperson: false,
  })
  const [mobileNavOpenSections, setMobileNavOpenSections] = useState({
    design: false,
    explore: false,
    learn: false,
    shop: false,
    about: false,
  })
  const [footerOpenSections, setFooterOpenSections] = useState({
    company: false,
    explore: false,
    locations: false,
    brands: false,
    contact: false,
    follow: false,
  })

  const toggleFooterSection = (sectionName) => {
    setFooterOpenSections((currentSections) => ({
      ...currentSections,
      [sectionName]: !currentSections[sectionName],
    }))
  }

  const toggleMobileNavSection = (sectionName) => {
    setMobileNavOpenSections((currentSections) => ({
      ...currentSections,
      [sectionName]: !currentSections[sectionName],
    }))
  }

  const toggleServiceCard = (sectionName) => {
    setServiceCardOpen((currentSections) => ({
      ...currentSections,
      [sectionName]: !currentSections[sectionName],
    }))
  }

  const navigateToPage = (pageName) => {
    setCurrentPage(pageName)
    setMenuOpen(false)

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', pageName === 'contact' ? '/contact' : '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const testimonials = [
    {
      name: 'Ava M.',
      quote: 'The process felt calm and organized from the first call. I always knew what was coming next.',
    },
    {
      name: 'Jordan R.',
      quote: 'Our designer turned a few ideas into a room that feels finished, warm, and completely personal.',
    },
    {
      name: 'Priya S.',
      quote: 'I loved being able to move at my own pace while still making real progress on the design.',
    },
    {
      name: 'Elena T.',
      quote: 'The recommendations made shopping easy, and the final result looks better than I expected.',
    },
    {
      name: 'Marcus D.',
      quote: 'It was simple to share inspiration, and the final plan felt tailored to the way we live.',
    },
  ]

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window === 'undefined') {
        return
      }

      setCurrentPage(window.location.pathname === '/contact' ? 'contact' : 'home')
      setMenuOpen(false)
    }

    const handleScroll = () => {
      setCardsOverlapHero(window.scrollY > 24)
      setHeaderSolid(window.innerWidth > 720 && window.scrollY > window.innerHeight - 48)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const isContactPage = currentPage === 'contact'

  return (
    <>
      <header className={`site-header ${(headerSolid || isContactPage) ? 'site-header--solid' : ''} ${menuOpen ? 'site-header--open' : ''}`}>
        <a className="site-header__brand" href="/" aria-label="Fusion Home" onClick={(event) => { event.preventDefault(); navigateToPage('home') }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/3f0bb9e3-71eb-4f35-b164-32c0d3e3a381/Fusion%2BFINALLogo-2022-Color.png"
            alt="Fusion"
          />
        </a>

        <button
          className="site-header__toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="site-header__nav" aria-label="Primary">
          <ul className="site-header__nav-list">
            <li className="site-header__nav-item site-header__nav-item--has-menu">
              <a href="/">Design</a>
              <div className="design-menu" aria-label="Design menu">
                <div className="design-menu__group">
                  <h3>Work with a designer</h3>
                  <ul>
                    <li><a href="/">Interior Design Services</a></li>
                    <li><a href="/">In-Person Interior Design</a></li>
                    <li><a href="/">AI Interior Design</a></li>
                  </ul>
                </div>

                <div className="design-menu__group">
                  <h3>Find your designer</h3>
                  <ul>
                    <li><a href="/">Interior Designers</a></li>
                    <li><a href="/">Designers by City</a></li>
                  </ul>
                </div>

                <div className="design-menu__group">
                  <h3>Plan your project</h3>
                  <ul>
                    <li><a href="/">Pricing &amp; Packages</a></li>
                    <li><a href="/">Interior Design Cost Guide</a></li>
                    <li><a href="/">Interior Design Style Quiz</a></li>
                    <li><a href="/">Gift Cards</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="site-header__nav-item site-header__nav-item--has-menu">
              <a href="/">Explore</a>
              <div className="design-menu explore-menu" aria-label="Explore menu">
                <div className="design-menu__group">
                  <h3>Ideas by Room</h3>
                  <ul>
                    <li><a href="/">Living Room Ideas</a></li>
                    <li><a href="/">Bedroom Ideas</a></li>
                    <li><a href="/">Dining Room Ideas</a></li>
                    <li><a href="/">Home Office Ideas</a></li>
                    <li><a href="/">Nursery Ideas</a></li>
                    <li><a href="/">Outdoor &amp; Patio Ideas</a></li>
                    <li><a href="/">Entryway Ideas</a></li>
                  </ul>
                </div>

                <div className="design-menu__group">
                  <h3>Ideas by style</h3>
                  <ul>
                    <li><a href="/">Modern Boho</a></li>
                    <li><a href="/">Mid-Century Modern</a></li>
                    <li><a href="/">Coastal</a></li>
                    <li><a href="/">Modern Farmhouse</a></li>
                    <li><a href="/">Traditional</a></li>
                    <li><a href="/">Scandinavian</a></li>
                    <li><a href="/">Glam</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="site-header__nav-item site-header__nav-item--has-menu">
              <a href="/">Learn</a>
              <div className="design-menu learn-menu" aria-label="Learn menu">
                <div className="design-menu__group">
                  <h3>Design 101</h3>
                  <ul>
                    <li><a href="/">What Is Online Interior Design?</a></li>
                    <li><a href="/">Online vs. Traditional Interior Design</a></li>
                    <li><a href="/">What's My Interior Design Style?</a></li>
                    <li><a href="/">Is Havenly Worth It?</a></li>
                    <li><a href="/">Interior Design Guides</a></li>
                  </ul>
                </div>

                <div className="design-menu__group">
                  <h3>Cost Guides</h3>
                  <ul>
                    <li><a href="/">How Much Does Interior Design Cost?</a></li>
                    <li><a href="/">Kitchen Renovation Costs</a></li>
                    <li><a href="/">Bathroom Renovation Costs</a></li>
                    <li><a href="/">Living Room Design Costs</a></li>
                    <li><a href="/">See all guides</a></li>
                  </ul>
                </div>

                <div className="design-menu__group">
                  <h3>From the blog</h3>
                  <ul>
                    <li><a href="/">Decorating How-To</a></li>
                    <li><a href="/">Style Guides</a></li>
                    <li><a href="/">Furniture Buying Guides</a></li>
                    <li><a href="/">Home Tours</a></li>
                    <li><a href="/">Visit the blog</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="site-header__nav-item site-header__nav-item--has-menu">
              <a href="/">Shop</a>
              <div className="design-menu shop-menu" aria-label="Shop menu">
                <div className="design-menu__group">
                  <h3>Furniture</h3>
                  <ul>
                    <li><a href="/">Sofas &amp; Sectionals</a></li>
                    <li><a href="/">Accent Chairs</a></li>
                    <li><a href="/">Coffee &amp; Accent Tables</a></li>
                    <li><a href="/">Media Consoles</a></li>
                    <li><a href="/">Beds &amp; Headboards</a></li>
                    <li><a href="/">Dining Tables &amp; Chairs</a></li>
                    <li><a href="/">Shop all furniture</a></li>
                  </ul>
                </div>

                <div className="design-menu__group">
                  <h3>Décor &amp; lighting</h3>
                  <ul>
                    <li><a href="/">Rugs</a></li>
                    <li><a href="/">Throw Pillows</a></li>
                    <li><a href="/">Wall Art &amp; Mirrors</a></li>
                    <li><a href="/">Table &amp; Floor Lamps</a></li>
                    <li><a href="/">Vases &amp; Botanicals</a></li>
                    <li><a href="/">Shop all décor</a></li>
                  </ul>
                </div>

                <div className="design-menu__group">
                  <h3>Our brands</h3>
                  <ul>
                    <li><a href="/">Burrow</a></li>
                    <li><a href="/">Interior Define</a></li>
                    <li><a href="/">The Citizenry</a></li>
                    <li><a href="/">The Inside</a></li>
                    <li><a href="/">St. Frank</a></li>
                    <li><a href="/">Shop by style</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="site-header__nav-item site-header__nav-item--has-menu">
              <a href="/">About Us</a>
              <div className="design-menu about-menu" aria-label="About menu">
                <div className="design-menu__group">
                  <h3><a href="/">Our Story</a></h3>
                  <ul>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Approach</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="site-header__nav-item">
              <a
                href="/contact"
                onClick={(event) => {
                  event.preventDefault()
                  navigateToPage('contact')
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <ul className="site-header__actions-list">
            <li>
              <a className="site-header__login" href="/">
                Login
              </a>
            </li>
            <li>
              <a className="site-header__getstarted" href="/">
                GetStarted
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className={`mobile-menu-modal ${menuOpen ? 'mobile-menu-modal--open' : ''}`}>
        <div className="mobile-menu-modal__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
          <div className="mobile-menu-modal__top">
            <a className="site-header__brand mobile-menu-modal__brand" href="/" aria-label="Fusion Home">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/3f0bb9e3-71eb-4f35-b164-32c0d3e3a381/Fusion%2BFINALLogo-2022-Color.png"
                alt="Fusion"
              />
            </a>

            <button
              className="site-header__toggle mobile-menu-modal__close"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <nav className="mobile-menu-modal__nav" aria-label="Mobile primary">
            <div className={`mobile-menu-modal__nav-section ${mobileNavOpenSections.design ? 'mobile-menu-modal__nav-section--open' : ''}`}>
              <div className="mobile-menu-modal__nav-item">
                <a href="/">Design</a>
                <button
                  className="mobile-menu-modal__chevron-button"
                  type="button"
                  aria-label={`${mobileNavOpenSections.design ? 'Collapse' : 'Expand'} Design menu`}
                  aria-expanded={mobileNavOpenSections.design}
                  onClick={() => toggleMobileNavSection('design')}
                >
                  <span className="mobile-menu-modal__chevron" aria-hidden="true" />
                </button>
              </div>

              <div className="mobile-menu-modal__submenu">
                <div className="mobile-menu-modal__submenu-group">
                  <h3>Work with a designer</h3>
                  <ul>
                    <li><a href="/">Interior Design Services</a></li>
                    <li><a href="/">In-Person Interior Design</a></li>
                    <li><a href="/">AI Interior Design</a></li>
                  </ul>
                </div>

                <div className="mobile-menu-modal__submenu-group">
                  <h3>Find your designer</h3>
                  <ul>
                    <li><a href="/">Interior Designers</a></li>
                    <li><a href="/">Designers by City</a></li>
                  </ul>
                </div>

                <div className="mobile-menu-modal__submenu-group">
                  <h3>Plan your project</h3>
                  <ul>
                    <li><a href="/">Pricing &amp; Packages</a></li>
                    <li><a href="/">Interior Design Cost Guide</a></li>
                    <li><a href="/">Interior Design Style Quiz</a></li>
                    <li><a href="/">Gift Cards</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`mobile-menu-modal__nav-section ${mobileNavOpenSections.explore ? 'mobile-menu-modal__nav-section--open' : ''}`}>
              <div className="mobile-menu-modal__nav-item">
                <a href="/">Explore</a>
                <button
                  className="mobile-menu-modal__chevron-button"
                  type="button"
                  aria-label={`${mobileNavOpenSections.explore ? 'Collapse' : 'Expand'} Explore menu`}
                  aria-expanded={mobileNavOpenSections.explore}
                  onClick={() => toggleMobileNavSection('explore')}
                >
                  <span className="mobile-menu-modal__chevron" aria-hidden="true" />
                </button>
              </div>

              <div className="mobile-menu-modal__submenu">
                <div className="mobile-menu-modal__submenu-group">
                  <h3>Ideas by Room</h3>
                  <ul>
                    <li><a href="/">Living Room Ideas</a></li>
                    <li><a href="/">Bedroom Ideas</a></li>
                    <li><a href="/">Dining Room Ideas</a></li>
                    <li><a href="/">Home Office Ideas</a></li>
                    <li><a href="/">Nursery Ideas</a></li>
                    <li><a href="/">Outdoor &amp; Patio Ideas</a></li>
                    <li><a href="/">Entryway Ideas</a></li>
                  </ul>
                </div>

                <div className="mobile-menu-modal__submenu-group">
                  <h3>Ideas by style</h3>
                  <ul>
                    <li><a href="/">Modern Boho</a></li>
                    <li><a href="/">Mid-Century Modern</a></li>
                    <li><a href="/">Coastal</a></li>
                    <li><a href="/">Modern Farmhouse</a></li>
                    <li><a href="/">Traditional</a></li>
                    <li><a href="/">Scandinavian</a></li>
                    <li><a href="/">Glam</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`mobile-menu-modal__nav-section ${mobileNavOpenSections.learn ? 'mobile-menu-modal__nav-section--open' : ''}`}>
              <div className="mobile-menu-modal__nav-item">
                <a href="/">Learn</a>
                <button
                  className="mobile-menu-modal__chevron-button"
                  type="button"
                  aria-label={`${mobileNavOpenSections.learn ? 'Collapse' : 'Expand'} Learn menu`}
                  aria-expanded={mobileNavOpenSections.learn}
                  onClick={() => toggleMobileNavSection('learn')}
                >
                  <span className="mobile-menu-modal__chevron" aria-hidden="true" />
                </button>
              </div>

              <div className="mobile-menu-modal__submenu">
                <div className="mobile-menu-modal__submenu-group">
                  <h3>Design 101</h3>
                  <ul>
                    <li><a href="/">What Is Online Interior Design?</a></li>
                    <li><a href="/">Online vs. Traditional Interior Design</a></li>
                    <li><a href="/">What's My Interior Design Style?</a></li>
                    <li><a href="/">Is Havenly Worth It?</a></li>
                    <li><a href="/">Interior Design Guides</a></li>
                  </ul>
                </div>

                <div className="mobile-menu-modal__submenu-group">
                  <h3>Cost Guides</h3>
                  <ul>
                    <li><a href="/">How Much Does Interior Design Cost?</a></li>
                    <li><a href="/">Kitchen Renovation Costs</a></li>
                    <li><a href="/">Bathroom Renovation Costs</a></li>
                    <li><a href="/">Living Room Design Costs</a></li>
                    <li><a href="/">See all guides</a></li>
                  </ul>
                </div>

                <div className="mobile-menu-modal__submenu-group">
                  <h3>From the blog</h3>
                  <ul>
                    <li><a href="/">Decorating How-To</a></li>
                    <li><a href="/">Style Guides</a></li>
                    <li><a href="/">Furniture Buying Guides</a></li>
                    <li><a href="/">Home Tours</a></li>
                    <li><a href="/">Visit the blog</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`mobile-menu-modal__nav-section ${mobileNavOpenSections.shop ? 'mobile-menu-modal__nav-section--open' : ''}`}>
              <div className="mobile-menu-modal__nav-item">
                <a href="/">Shop</a>
                <button
                  className="mobile-menu-modal__chevron-button"
                  type="button"
                  aria-label={`${mobileNavOpenSections.shop ? 'Collapse' : 'Expand'} Shop menu`}
                  aria-expanded={mobileNavOpenSections.shop}
                  onClick={() => toggleMobileNavSection('shop')}
                >
                  <span className="mobile-menu-modal__chevron" aria-hidden="true" />
                </button>
              </div>

              <div className="mobile-menu-modal__submenu">
                <div className="mobile-menu-modal__submenu-group">
                  <h3>Furniture</h3>
                  <ul>
                    <li><a href="/">Sofas &amp; Sectionals</a></li>
                    <li><a href="/">Accent Chairs</a></li>
                    <li><a href="/">Coffee &amp; Accent Tables</a></li>
                    <li><a href="/">Media Consoles</a></li>
                    <li><a href="/">Beds &amp; Headboards</a></li>
                    <li><a href="/">Dining Tables &amp; Chairs</a></li>
                    <li><a href="/">Shop all furniture</a></li>
                  </ul>
                </div>

                <div className="mobile-menu-modal__submenu-group">
                  <h3>Décor &amp; lighting</h3>
                  <ul>
                    <li><a href="/">Rugs</a></li>
                    <li><a href="/">Throw Pillows</a></li>
                    <li><a href="/">Wall Art &amp; Mirrors</a></li>
                    <li><a href="/">Table &amp; Floor Lamps</a></li>
                    <li><a href="/">Vases &amp; Botanicals</a></li>
                    <li><a href="/">Shop all décor</a></li>
                  </ul>
                </div>

                <div className="mobile-menu-modal__submenu-group">
                  <h3>Our brands</h3>
                  <ul>
                    <li><a href="/">Burrow</a></li>
                    <li><a href="/">Interior Define</a></li>
                    <li><a href="/">The Citizenry</a></li>
                    <li><a href="/">The Inside</a></li>
                    <li><a href="/">St. Frank</a></li>
                    <li><a href="/">Shop by style</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`mobile-menu-modal__nav-section ${mobileNavOpenSections.about ? 'mobile-menu-modal__nav-section--open' : ''}`}>
              <div className="mobile-menu-modal__nav-item">
                <a href="/">About Us</a>
                <button
                  className="mobile-menu-modal__chevron-button"
                  type="button"
                  aria-label={`${mobileNavOpenSections.about ? 'Collapse' : 'Expand'} About Us menu`}
                  aria-expanded={mobileNavOpenSections.about}
                  onClick={() => toggleMobileNavSection('about')}
                >
                  <span className="mobile-menu-modal__chevron" aria-hidden="true" />
                </button>
              </div>

              <div className="mobile-menu-modal__submenu">
                <div className="mobile-menu-modal__submenu-group">
                  <h3><a href="/">Our Story</a></h3>
                  <ul>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Approach</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mobile-menu-modal__nav-item">
              <a
                href="/contact"
                onClick={(event) => {
                  event.preventDefault()
                  navigateToPage('contact')
                }}
              >
                Contact Us
              </a>
              <span className="mobile-menu-modal__chevron" aria-hidden="true" />
            </div>
          </nav>

          <a className="mobile-menu-modal__getstarted" href="/">Get Started</a>

          <div className="mobile-menu-modal__socials" aria-label="Social links">
            <a href="/" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8.5V7c0-.7.5-1 1-1h2V3h-3c-2.2 0-3 1.8-3 3.5v2H9v3h2v9h3v-9h2.6l.4-3H14Z" />
              </svg>
            </a>
            <a href="/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
                <circle cx="12" cy="12" r="4" fill="none" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="/" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 9h3v10H5V9Zm1.5-5A1.5 1.5 0 1 1 5 5.5 1.5 1.5 0 0 1 6.5 4ZM10 9h3v1.4c.4-.8 1.4-1.7 3.1-1.7 3 0 3.9 2 3.9 4.8V19h-3v-4.2c0-1.4 0-3.2-2-3.2s-2.3 1.6-2.3 3.1V19h-3V9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {isContactPage ? (
        <ContactPage onBack={() => navigateToPage('home')} />
      ) : (
        <>
          <main className="hero-stage" aria-label="Hero background">
            <div className="hero-stage__overlay" aria-hidden="true" />

            <div className="hero-stage__content">
              <h1>Spaces that inspire</h1>
              <p>
                Thoughtful interiors designed to shape
                <br />
                memorable experiences.
              </p>
              <a className="site-header__getstarted hero-stage__getstarted" href="/">
                GetStarted
              </a>
            </div>

            <video
              className="hero-stage__media"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </main>

          <section
            className={`service-cards ${cardsOverlapHero ? 'service-cards--overlap' : ''}`}
            aria-label="Interior design services"
          >
            <article className={`service-card service-card--online ${serviceCardOpen.online ? 'service-card--open' : ''}`}>
              <div className="service-card__mobile-header">
                <span className="service-card__mobile-label">Online</span>
                <button
                  className="service-card__toggle"
                  type="button"
                  aria-label={`${serviceCardOpen.online ? 'Collapse' : 'Expand'} online interior design services`}
                  aria-expanded={serviceCardOpen.online}
                  onClick={() => toggleServiceCard('online')}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              </div>

              <div className="service-card__body">
                <p className="service-card__eyebrow">Online Interior Design Services</p>
                <h2>Modern design support from anywhere.</h2>
                <p>
                  Create a polished, personal space with guided design help, thoughtful sourcing, and a clear plan from start to finish.
                </p>
              </div>
            </article>

            <article className={`service-card service-card--inperson ${serviceCardOpen.inperson ? 'service-card--open' : ''}`}>
              <div className="service-card__mobile-header">
                <span className="service-card__mobile-label">In Person</span>
                <button
                  className="service-card__toggle"
                  type="button"
                  aria-label={`${serviceCardOpen.inperson ? 'Collapse' : 'Expand'} in-person interior design services`}
                  aria-expanded={serviceCardOpen.inperson}
                  onClick={() => toggleServiceCard('inperson')}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              </div>

              <div className="service-card__body">
                <p className="service-card__eyebrow">In-Person Interior Design Services</p>
                <h2>Hands-on design for a more tailored experience.</h2>
                <p>
                  Work directly with a designer in your home for styling, planning, and room-by-room support that feels highly customized.
                </p>
              </div>
            </article>
          </section>

          <section className="service-intro" aria-label="Design room count overview">
            <p className="service-intro__eyebrow">Over 2 million room designs and counting.</p>
            <h2>Transform your home with one of our talented designers.</h2>
          </section>

          <section className="lobby-cards" aria-label="Lobby design cards">
            <article className="lobby-card">
              <div className="lobby-card__image-wrap">
                <img src={lobbyOneImage} alt="Lobby design inspiration one" />
              </div>
              <div className="lobby-card__content">
                <h3>Design Your Timeline</h3>
                <p>
                  Start when you are ready and move at a pace that fits your life, with guidance that keeps every step simple.
                </p>
              </div>
            </article>

            <article className="lobby-card">
              <div className="lobby-card__image-wrap">
                <img src={lobbyTwoImage} alt="Lobby design inspiration two" />
              </div>
              <div className="lobby-card__content">
                <h3>Bring Your Inspiration</h3>
                <p>
                  Share the ideas, colors, and references you love, and let a designer shape them into a cohesive space.
                </p>
              </div>
            </article>

            <article className="lobby-card">
              <div className="lobby-card__image-wrap">
                <img src={lobbyThreeImage} alt="Lobby design inspiration three" />
              </div>
              <div className="lobby-card__content">
                <h3>Shop at the Best Prices</h3>
                <p>
                  Discover thoughtful options and well-priced pieces that help you complete the room without losing style.
                </p>
              </div>
            </article>
          </section>

          <section className="testimonials" aria-label="Customer testimonials">
            <div className="testimonials__heading">
              <p className="testimonials__eyebrow">Review Spotlight</p>
              <h2>Real Reviews</h2>
            </div>

            <div className="testimonials__viewport">
              <div className="testimonials__track">
                {testimonials.map((testimonial, index) => (
                  <article
                    className="testimonial-card"
                    key={`${testimonial.name}-${index}`}
                  >
                    <h3>{testimonial.name}</h3>

                    <div className="testimonial-card__stars" aria-label="Five star rating">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <svg key={starIndex} viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2.4l2.83 5.74 6.34.92-4.59 4.48 1.08 6.31L12 16.95l-5.66 2.9 1.08-6.31-4.59-4.48 6.34-.92L12 2.4Z" />
                        </svg>
                      ))}
                    </div>

                    <p>{testimonial.quote}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="meet-team" aria-label="Meet the team">
            <div className="meet-team__intro">
              <p className="meet-team__eyebrow">Meet the Team</p>
              <h2>Meet the people shaping every project.</h2>
              <p>
                Fusion A.I. Design brings together experienced leadership and hands-on project coordination to keep every design thoughtful, responsive, and personal.
              </p>
            </div>

            <div className="meet-team__members">
              <article className="team-member-card">
                <div className="team-member-card__image-wrap">
                  <img src={aliceImage} alt="Alice Joseph-Limer" />
                </div>
                <div className="team-member-card__content">
                  <p className="team-member-card__role">ALICE JOSEPH-LIMER | FOUNDING PRINCIPAL &amp; CEO</p>
                  <h3>Alice Joseph-Limer</h3>
                  <p>
                    Alice is a licensed Interior Designer with a Master of Architecture degree from Virginia Tech and a Bachelor of Science degree in Interior Design, followed by 25+ years of professional practice.
                  </p>
                </div>
              </article>

              <article className="team-member-card">
                <div className="team-member-card__image-wrap">
                  <img src={elaineImage} alt="Elaine Donnelly" />
                </div>
                <div className="team-member-card__content">
                  <p className="team-member-card__role">ELAINE DONNELLY | ASSOCIATE &amp; PROJECT MANAGER</p>
                  <h3>Elaine Donnelly</h3>
                  <p>
                    Elaine Donnelly is a Licensed Sr. Interior Designer at Fusion A.I. Design, holding a Bachelor of Fine Arts degree in Interior Design. Her proficiency in technology, extensive design experience, and her open communication manner are key to project coordination, leadership, and creativity in the studio.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="room-cta" aria-label="Get started call to action">
            <p className="room-cta__eyebrow">Your room, your way. Let&apos;s get started.</p>
            <p className="room-cta__body">
              Take the quiz, get matched, and build a plan you can shop at your own pace. The best part? Seeing it all come to life.
            </p>
            <a className="site-header__getstarted room-cta__button" href="/">
              Get Started
            </a>
          </section>
        </>
      )}

      <footer className="site-footer" aria-label="Site footer">
        <div className="site-footer__grid">
          <section className={`site-footer__section ${footerOpenSections.company ? 'site-footer__section--open' : ''}`}>
            <div className="site-footer__heading-row">
              <h2>Company</h2>
              <button
                className="site-footer__toggle"
                type="button"
                aria-label={`${footerOpenSections.company ? 'Collapse' : 'Expand'} Company section`}
                aria-expanded={footerOpenSections.company}
                onClick={() => toggleFooterSection('company')}
              >
                <span />
                <span />
              </button>
            </div>
            <ul>
              <li>Careers</li>
              <li>Design Careers</li>
              <li>Reviews</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Press Inquiries</li>
            </ul>
          </section>

          <section className={`site-footer__section ${footerOpenSections.explore ? 'site-footer__section--open' : ''}`}>
            <div className="site-footer__heading-row">
              <h2>Explore</h2>
              <button
                className="site-footer__toggle"
                type="button"
                aria-label={`${footerOpenSections.explore ? 'Collapse' : 'Expand'} Explore section`}
                aria-expanded={footerOpenSections.explore}
                onClick={() => toggleFooterSection('explore')}
              >
                <span />
                <span />
              </button>
            </div>
            <ul>
              <li>Style Quiz</li>
              <li>Financing</li>
              <li>Gift Cards</li>
              <li>Refer &amp; Earn</li>
              <li>Help Center</li>
              <li>Promotions</li>
              <li>Learn</li>
            </ul>
          </section>

          <section className={`site-footer__section ${footerOpenSections.locations ? 'site-footer__section--open' : ''}`}>
            <div className="site-footer__heading-row">
              <h2>In-Person Locations</h2>
              <button
                className="site-footer__toggle"
                type="button"
                aria-label={`${footerOpenSections.locations ? 'Collapse' : 'Expand'} In-Person Locations section`}
                aria-expanded={footerOpenSections.locations}
                onClick={() => toggleFooterSection('locations')}
              >
                <span />
                <span />
              </button>
            </div>
            <ul>
              <li>Denver</li>
              <li>Houston</li>
              <li>Austin</li>
              <li>Dallas</li>
              <li>Chicago</li>
              <li>New York</li>
              <li>View All Locations</li>
            </ul>
          </section>

          <section className={`site-footer__section ${footerOpenSections.brands ? 'site-footer__section--open' : ''}`}>
            <div className="site-footer__heading-row">
              <h2>Our Brands</h2>
              <button
                className="site-footer__toggle"
                type="button"
                aria-label={`${footerOpenSections.brands ? 'Collapse' : 'Expand'} Our Brands section`}
                aria-expanded={footerOpenSections.brands}
                onClick={() => toggleFooterSection('brands')}
              >
                <span />
                <span />
              </button>
            </div>
            <ul>
              <li>Interior Define</li>
              <li>The Citizenry</li>
              <li>Burrow</li>
              <li>The Inside</li>
              <li>St. Frank</li>
            </ul>
          </section>

          <section className={`site-footer__section ${footerOpenSections.contact ? 'site-footer__section--open' : ''}`}>
            <div className="site-footer__heading-row">
              <h2>Contact</h2>
              <button
                className="site-footer__toggle"
                type="button"
                aria-label={`${footerOpenSections.contact ? 'Collapse' : 'Expand'} Contact section`}
                aria-expanded={footerOpenSections.contact}
                onClick={() => toggleFooterSection('contact')}
              >
                <span />
                <span />
              </button>
            </div>
            <ul>
              <li>hello@fusionaiddesign.com</li>
            </ul>
          </section>

          <section className={`site-footer__section ${footerOpenSections.follow ? 'site-footer__section--open' : ''}`}>
            <div className="site-footer__heading-row">
              <h2>Follow Us</h2>
              <button
                className="site-footer__toggle"
                type="button"
                aria-label={`${footerOpenSections.follow ? 'Collapse' : 'Expand'} Follow Us section`}
                aria-expanded={footerOpenSections.follow}
                onClick={() => toggleFooterSection('follow')}
              >
                <span />
                <span />
              </button>
            </div>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Twitter</li>
            </ul>
          </section>
        </div>

        <div className="site-footer__legal">
          <p>© 2026 Fusion Aid Design. All Rights Reserved.</p>

          <div className="site-footer__legal-links">
            <span>Find us in the App Store</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>

          </div>
        </div>
      </footer>
    </>
  )
}



export default App