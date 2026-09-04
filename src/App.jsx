import './App.css'
import './ContactPage.css'
import './TeamPage.css'
import './PortfolioPage.css'
import heroVideo from '../assets/media.mp4'
import exploreHeroVideo from '../assets/explore-hero-media.mp4'
import lobbyOneImage from '../assets/Lobby1.jpg'
import lobbyTwoImage from '../assets/Lobby2.jpeg'
import lobbyThreeImage from '../assets/Lobby3.jpg'
import aliceImage from '../assets/Alice.jpg'
import elaineImage from '../assets/Elaine.jpg'
import facebookLogo from '../assets/facebook.png'
import instagramLogo from '../assets/instagram.png'
import linkedinLogo from '../assets/linkedin.png'
import { useEffect, useState } from 'react'

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/fusionaidesigninc/',
    icon: facebookLogo,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/fusionaidesign/?hl=en',
    icon: instagramLogo,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/fusion-architectural-interior-design/',
    icon: linkedinLogo,
  },
]

const portfolioProjects = [
  {
    title: 'Coming Soon - Embassy Suites Pigeon Forge',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1728333962058-YTZ8MI2OL0XO4TYEYO8L/v1-1027-X.jpg?format=750w',
  },
  {
    title: 'Under Renovation - Embassy Suites Ridgeland',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1728333645683-9K4VJG0T408N0ZDK0VLR/Front+Desk-1012+copy-x.jpg?format=750w',
  },
  {
    title: 'Hampton Inn | Home2 Suites Austin',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1728333139219-77C59K39L6WP6NX6WHW9/20257-HI+H2-Austin+TX-Reception+Rendering.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Hapeville',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631802481063-PI2ERJKWUHQDSDAMQL8K/01-Guest+Reception.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Halcyon',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631802685973-RAIWYUVCBE3M4LWWYE41/01-Guest+Reception.jpg?format=750w',
  },
  {
    title: 'AC Hotel Durham NC',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636737971413-XB40LKOM1DYSBWOD2JQJ/AC+Hotel+Durham-01-FrontDesk.jpg?format=750w',
  },
  {
    title: 'Hyatt House Atlanta',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631829032515-PR3XQ527LE60ZERHFZMD/Hyatt-House-Atlanta-Perimeter-Center-02-Commons.jpg?format=750w',
  },
  {
    title: 'Element Atlanta Buckhead',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631829491912-YZGTZ37AJ58EHBJAWC30/Element+Buckhead-08-ELM_ATLEL_Chemistry_Bar_1.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Syracuse',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631829559421-OVYS1TZJEUOM3METOC5L/02-Atrium-GYL+Syracuse+Embassy-0061_2_3.jpg?format=750w',
  },
  {
    title: 'Hampton Inn Oakland CA',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631829787715-ML6QD4QCRGGWGLFK9FUM/Hampton+Inn+Oakland-04-Lobby-breakfast-seating-1.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Sugarloaf',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631830557823-LN54993JTR266I0O2BLM/Embassy+Suites+Sugarloaf+GA+-+03+-+Bar+Table.jpg?format=750w',
  },
  {
    title: 'HWS Spring TX',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631830613811-7C3XCRFZGHLYW0ZVXDZD/Homewood+Suites+Spring+TX+-+02+Lobby+Rev.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Knoxville Downtown',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631830443410-9EEV9GHIVEDL4JHUS7B1/Embassy+Suites+Knoxville+Downtown-08-Rooftop+BAR_DAY_SEATING.jpg?format=750w',
  },
  {
    title: 'HWS Sandy Springs',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631830689565-1S73L608O13P6LXLA4L7/Homewood+Suites+Sandy+Springs+-+02+Business+Center.jpg?format=750w',
  },
  {
    title: 'Embassy Suites ATL',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1631830745701-M5I5NWE0RNUYTZQ8K7OP/Embassy+Suites+Atlanta+Airport+-+03+Atrium.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Plainfield',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636736101400-RNWLNH4X3RX6RQL02P1X/02-Lobby+Atrium.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Knoxville West',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636735119777-9UVNZZ66T1XYKSH4FXMF/Embassy+Suites+Knoxville+-+03+Atrium+Bar.jpg?format=750w',
  },
  {
    title: 'Hampton Hamilton Place',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636735085135-FUWK5BMPIJU0NYHYH7SB/Hampton+Inn+Hamilton+Place+-+01+Lobby+1.jpg?format=750w',
  },
  {
    title: 'HGI Murfreesboro',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636735160639-393F15A0BWRMTVM17MUG/Hilton+Garden+Inn+Murfreesboro+-+01+Reception.jpg?format=750w',
  },
  {
    title: 'HWS Mobile',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636735305755-5DJMAK8J9U45N7TPMDJU/Homewood+Suites+Mobile+-+01+Front+Desk+Lobby.jpg?format=750w',
  },
  {
    title: 'Hampton Tyler Tx',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636735370536-MVNX73IB0AD2HYFZYXL5/Hampton+Inn+Tyler+TX+-+01+Lobby.jpg?format=750w',
  },
  {
    title: 'Hampton Home2 Louisville',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636735902052-XD7XFPRU3HTJ50S6F14R/HAMPTON+-+HOME2+LOUISVILLE+KY+-+02+-+HAMPTON+LOBBY.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Noblesville',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636736014756-QZFYONC7QCGU9MCGCO1G/03-Bar.jpg?format=750w',
  },
  {
    title: 'Embassy Suites Oklahoma City Northwest',
    image: 'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1636736182229-BR3YPU3L6JPTI8PNFDTF/01-Guest+Reception.jpg?format=750w',
  },
]

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

function TeamPage({ onHome, onContact }) {
  return (
    <main className="team-page" aria-label="The Team page">
      <section className="team-page__hero">
        <div className="team-page__hero-copy">
          <p className="team-page__eyebrow">The Team</p>
          <h1>People, process, and design working together.</h1>
          <p>
            Since 2003, Fusion A.I. Design has been a values-driven Architectural Interior Design firm committed to bringing innovative design to the realization of interior space in the domestic and international marketplaces.
          </p>
          <div className="team-page__hero-actions">
            <button className="team-page__secondary-button" type="button" onClick={onHome}>
              Back to Home
            </button>
            <a
              className="team-page__primary-button"
              href="/contact"
              onClick={(event) => {
                event.preventDefault()
                onContact()
              }}
            >
              Schedule A Phone Consultation
            </a>
          </div>
        </div>

        <aside className="team-page__hero-panel">
          <p className="team-page__hero-panel-label">Our approach</p>
          <h2>Integrated design, procurement, and project delivery.</h2>
          <p>
            We bring together the combined knowledge and expertise of the entire team to ensure the success of your project while maintaining the original design intent.
          </p>
        </aside>
      </section>

      <section className="team-page__members" aria-label="Team members">
        <article className="team-member-card">
          <img
            className="team-member-card__image"
            src="https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1632774475686-ABV2K34JEV0MRU88DSKX/DSC_1070-AliceJL_headshot_BFP.jpg"
            alt="Alice Joseph-Limer headshot"
          />
          <div className="team-member-card__body">
            <p className="team-member-card__eyebrow">Founding Principal &amp; CEO</p>
            <h2>ALICE JOSEPH-LIMER | FOUNDING PRINCIPAL &amp; CEO</h2>
            <p>
              Alice is a licensed Interior Designer with a Master of Architecture degree from Virginia Tech and a Bachelor of Science degree in Interior Design, followed by 25+ years of professional practice.
            </p>
            <p className="team-member-card__readmore">Read More</p>
          </div>
        </article>

        <article className="team-member-card team-member-card--reverse">
          <img
            className="team-member-card__image"
            src="https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1632774567558-KD5T4R857TCUM7VS5T0P/DSC_8169-ElaineD_headshot_BFP.jpg"
            alt="Elaine Donnelly headshot"
          />
          <div className="team-member-card__body">
            <p className="team-member-card__eyebrow">Associate &amp; Project Manager</p>
            <h2>ELAINE DONNELLY | ASSOCIATE &amp; PROJECT MANAGER</h2>
            <p>
              Elaine Donnelly is a Licensed Sr. Interior Designer at Fusion A.I. Design, holding a Bachelor of Fine Arts degree in Interior Design. Her proficiency in technology, extensive design experience, and her open communication manner are key to project coordination, leadership, and creativity in the studio.
            </p>
            <p className="team-member-card__readmore">Read More</p>
          </div>
        </article>
      </section>

      <section className="team-page__story">
        <div className="team-page__story-panel">
          <p className="team-page__eyebrow">How we work</p>
          <h2>Design, procurement, and delivery in one integrated process.</h2>
          <p>
            Because of our impeccable reputation and integrity, there was significant client demand to extend our services to provide FFA procurement. As a result, in 2016 FAID Procurement became an integral part of our project delivery services.
          </p>
          <p>
            We bring the same integrated approach to procurement and provide clients a more simplified, one-stop delivery approach.
          </p>
        </div>

        <div className="team-page__story-panel team-page__story-panel--accent">
          <p className="team-page__eyebrow">Our Mission</p>
          <h2>To deliver thoughtful and cost-effective design solutions with a nuanced narrative that achieves our Client’s project vision and goals.</h2>
        </div>
      </section>

      <section className="team-page__values" aria-label="Our values">
        <article className="team-value-card">
          <h3>DO THE RIGHT THING</h3>
          <p>Work and Live with Integrity and Honesty. Simply put, we follow through on what we say and stand behind what we do.</p>
        </article>

        <article className="team-value-card">
          <h3>LOVE WHAT YOU DO</h3>
          <p>Our team’s shared passion to create beautiful spaces, solve complex problems, do excellent work, and serve others, is what drives the energy in everything we do.</p>
        </article>

        <article className="team-value-card">
          <h3>WORK TOGETHER</h3>
          <p>Collaboration maximizes team expertise and energy to yield the most cohesive results, ensuring the success of your project.</p>
        </article>

        <article className="team-value-card">
          <h3>KEEP IT SIMPLE</h3>
          <p>Life is complex, working with a designer shouldn’t be. We provide streamlined delivery processes to exceed Client and Brand expectations in communication, documentation, and procurement.</p>
        </article>

        <article className="team-value-card">
          <h3>DO IT BETTER</h3>
          <p>Create transformative experiences for those we serve. Our design solutions deliver inspired places that foster human well-being, functional efficiency, and client satisfaction.</p>
        </article>
      </section>
    </main>
  )
}

const getProjectSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function ProjectDetailPage({ project, images, onBack, onContact }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const handlePrev = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return
      if (e.key === 'Escape') setActiveImageIndex(null)
      if (e.key === 'ArrowLeft') handlePrev(e)
      if (e.key === 'ArrowRight') handleNext(e)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImageIndex])

  return (
    <div className="project-detail-page">
      {/* Detail Hero Section */}
      <section className="project-detail__hero">
        <img className="project-detail__hero-media" src={images[0]} alt={project.title} />
        <div className="project-detail__hero-overlay" />
        <div className="project-detail__hero-content">
          <button className="project-detail__back-btn" onClick={onBack}>
            <span className="arrow">←</span> Back to Explore
          </button>
          <p className="project-detail__category">Hospitality | Interior Design</p>
          <h1>{project.title}</h1>
          <div className="project-detail__meta">
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">
                {project.title.includes('Pigeon Forge') ? 'Pigeon Forge, TN' : project.title.includes('Ridgeland') ? 'Ridgeland, MS' : 'Atlanta, GA'}
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value">
                {project.title.toLowerCase().includes('soon') ? 'Coming Soon' : project.title.toLowerCase().includes('renovation') ? 'Under Renovation' : 'Completed'}
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Firm</span>
              <span className="meta-value">Fusion A.I. Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid/Details Layout */}
      <section className="project-detail__body">
        <div className="project-detail__container">
          {/* Info Side Column */}
          <div className="project-detail__info-sidebar">
            <div className="project-detail__sticky-card">
              <h3>The Narrative</h3>
              <p>
                Every space tells a story of the people who gather inside. For this hospitality project, our team integrated local materials, premium textures, and contemporary space planning to achieve a design that feels both remarkably fresh and deeply rooted in its environment.
              </p>
              <p>
                From custom millwork to comprehensive FF&amp;A procurement, we executed the design from initial concept, spacing, and styling phases to final delivery.
              </p>
              <div className="project-detail__cta-box">
                <h4>Shaping your own space?</h4>
                <p>Let&apos;s collaborate on a bespoke interior design tailored to you.</p>
                <button className="site-header__getstarted" onClick={onContact}>
                  Start a Project
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Sidebar */}
          <div className="project-detail__gallery-column">
            <h2>Project Gallery</h2>
            <p className="project-detail__gallery-subtitle">Click on any image to view fullscreen in high resolution</p>
            <div className="project-detail__grid">
              {images.map((image, idx) => (
                <div 
                  className={`project-detail__grid-item project-detail__grid-item--${idx}`} 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={image} alt={`${project.title} showcase ${idx + 1}`} loading="lazy" />
                  <div className="project-detail__grid-item-hover">
                    <span className="hover-view-badge">View Fullscreen</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="lightbox-modal" onClick={() => setActiveImageIndex(null)}>
          <button className="lightbox-modal__close" onClick={() => setActiveImageIndex(null)}>&times;</button>
          
          <button className="lightbox-modal__arrow lightbox-modal__arrow--prev" onClick={handlePrev}>
            &#10094;
          </button>
          
          <div className="lightbox-modal__image-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={images[activeImageIndex]} alt="Fullscreen view" />
            <div className="lightbox-modal__caption">
              <span>{project.title} &mdash; Image {activeImageIndex + 1} of {images.length}</span>
            </div>
          </div>
          
          <button className="lightbox-modal__arrow lightbox-modal__arrow--next" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  )
}

function PortfolioPage({ onHome, onContact, currentPage, onNavigate }) {
  const isDetail = currentPage.startsWith('portfolio-') && currentPage !== 'portfolio'

  if (isDetail) {
    const slug = currentPage.substring(10)
    const project = portfolioProjects.find((p) => getProjectSlug(p.title) === slug) || portfolioProjects[0]

    let images = []
    if (slug === 'coming-soon-embassy-suites-pigeon-forge') {
      images = [
        'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1728333962058-YTZ8MI2OL0XO4TYEYO8L/v1-1027-X.jpg?format=1000w',
        'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1728333917153-9QC76WQS3XNB9X5CQWWE/v2-1027-X.jpg?format=1000w',
        'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1728333918691-Q52FUZRX20JWSMXAMGOJ/v3-1027-X.jpg?format=1000w',
        'https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/1728333919787-B8XFL2A6FM0RZ6HLAJ13/v4-1027-X.jpg?format=1000w'
      ]
    } else {
      images = [
        project.image,
        lobbyOneImage,
        lobbyTwoImage,
        lobbyThreeImage
      ].filter(Boolean)
    }

    return (
      <ProjectDetailPage
        project={project}
        images={images}
        onBack={() => onNavigate('portfolio')}
        onContact={onContact}
      />
    )
  }

  return (
    <main className="portfolio-page" aria-label="Portfolio page">
      <section className="portfolio-page__hero">
        <video className="portfolio-page__hero-media" autoPlay muted loop playsInline aria-hidden="true">
          <source src={exploreHeroVideo} type="video/mp4" />
        </video>
        <div className="portfolio-page__hero-overlay" aria-hidden="true" />
        <div className="portfolio-page__hero-content">
          <p className="portfolio-page__eyebrow">Explore</p>
          <h1>Spaces with a point of view.</h1>
          <p>
            Explore a collection of thoughtful interiors shaped by story, function, and the way people experience a place.
          </p>
          <div className="portfolio-page__actions">
            <button className="portfolio-page__secondary-button" type="button" onClick={onHome}>
              Back to Home
            </button>
            <a
              className="portfolio-page__primary-button"
              href="/contact"
              onClick={(event) => {
                event.preventDefault()
                onContact()
              }}
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio-page__intro">
        <p className="portfolio-page__eyebrow">Selected work</p>
        <h2>Designed for the moments that happen inside.</h2>
        <p>
          From welcoming lobbies to spaces made for gathering, every project begins with a clear understanding of its people and purpose.
        </p>
      </section>

      <section className="portfolio-page__projects" aria-label="Selected portfolio projects">
        {portfolioProjects.map((project) => {
          const slug = getProjectSlug(project.title)
          return (
            <article
              className="portfolio-project"
              key={project.title}
              onClick={() => onNavigate(`portfolio-${slug}`)}
              style={{ cursor: 'pointer' }}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="portfolio-project__content">
                <p className="portfolio-page__eyebrow">Fusion A.I. Design</p>
                <h2>{project.title}</h2>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'home'
    }

    const { pathname } = window.location
    if (pathname === '/contact') return 'contact'
    if (pathname === '/team') return 'team'
    if (pathname === '/portfolio') return 'portfolio'
    if (pathname.startsWith('/portfolio/')) {
      return `portfolio-${pathname.substring(11)}`
    }

    return 'home'
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
    learn: false,
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
      let path = '/'
      if (pageName === 'contact') path = '/contact'
      else if (pageName === 'team') path = '/team'
      else if (pageName === 'portfolio') path = '/portfolio'
      else if (pageName.startsWith('portfolio-')) {
        path = `/portfolio/${pageName.substring(10)}`
      }
      window.history.pushState({}, '', path)
      window.scrollTo({ top: 0, behavior: 'instant' })
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

      const { pathname } = window.location
      if (pathname === '/contact') {
        setCurrentPage('contact')
        setMenuOpen(false)
        return
      }

      if (pathname === '/team') {
        setCurrentPage('team')
        setMenuOpen(false)
        return
      }

      if (pathname === '/portfolio') {
        setCurrentPage('portfolio')
        setMenuOpen(false)
        return
      }

      if (pathname.startsWith('/portfolio/')) {
        setCurrentPage(`portfolio-${pathname.substring(11)}`)
        setMenuOpen(false)
        return
      }

      setCurrentPage('home')
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

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined
    }

    const { body, documentElement } = document
    const previousBodyOverflow = body.style.overflow
    const previousHtmlOverflow = documentElement.style.overflow

    if (menuOpen) {
      body.style.overflow = 'hidden'
      documentElement.style.overflow = 'hidden'
    }

    return () => {
      body.style.overflow = previousBodyOverflow
      documentElement.style.overflow = previousHtmlOverflow
    }
  }, [menuOpen])

  const isContactPage = currentPage === 'contact'
  const isTeamPage = currentPage === 'team'
  const isPortfolioPage = currentPage.startsWith('portfolio')
  const isProjectDetailPage = currentPage.startsWith('portfolio-') && currentPage !== 'portfolio'

  return (
    <>
      {!isProjectDetailPage && (
        <header className={`site-header ${(headerSolid || isContactPage || isTeamPage) ? 'site-header--solid' : ''} ${menuOpen ? 'site-header--open' : ''}`}>
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
            <li className={`site-header__nav-item ${isPortfolioPage ? 'site-header__nav-item--active' : ''}`}>
              <a href="/portfolio" aria-current={isPortfolioPage ? 'page' : undefined} onClick={(event) => {
                event.preventDefault()
                navigateToPage('portfolio')
              }}>Explore</a>
            </li>
            <li className={`site-header__nav-item site-header__nav-item--has-menu ${isTeamPage ? 'site-header__nav-item--active' : ''}`}>
              <a href="/" onClick={(event) => {
                event.preventDefault()
                navigateToPage('team')
              }} aria-current={isTeamPage ? 'page' : undefined}>About Us</a>
              <div className="design-menu about-menu" aria-label="About menu">
                <div className="design-menu__group">
                  <h3><a href="/team" onClick={(event) => {
                    event.preventDefault()
                    navigateToPage('team')
                  }}>Our Story</a></h3>
                  <ul>
                    <li><a href="/team" onClick={(event) => {
                      event.preventDefault()
                      navigateToPage('team')
                    }}>Team</a></li>
                    <li><a href="/">Approach</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={`site-header__nav-item ${isContactPage ? 'site-header__nav-item--active' : ''}`}>
              <a
                href="/contact"
                aria-current={isContactPage ? 'page' : undefined}
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
              <a
                className="site-header__getstarted"
                href="/contact"
                onClick={(event) => {
                  event.preventDefault()
                  navigateToPage('contact')
                }}
              >
                GetStarted
              </a>
            </li>
          </ul>
        </div>
      </header>
      )}

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

            <div className={`mobile-menu-modal__nav-item ${isPortfolioPage ? 'mobile-menu-modal__nav-item--active' : ''}`}>
              <a href="/portfolio" aria-current={isPortfolioPage ? 'page' : undefined} onClick={(event) => {
                event.preventDefault()
                navigateToPage('portfolio')
              }}>Explore</a>
              <span className="mobile-menu-modal__chevron" aria-hidden="true" />
            </div>

            <div className={`mobile-menu-modal__nav-section ${mobileNavOpenSections.about ? 'mobile-menu-modal__nav-section--open' : ''}`}>
              <div className={`mobile-menu-modal__nav-item ${isTeamPage ? 'mobile-menu-modal__nav-item--active' : ''}`}>
                <a href="/" aria-current={isTeamPage ? 'page' : undefined} onClick={(event) => {
                  event.preventDefault()
                  navigateToPage('team')
                }}>About Us</a>
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
                  <h3><a href="/team" onClick={(event) => {
                    event.preventDefault()
                    navigateToPage('team')
                  }}>Our Story</a></h3>
                  <ul>
                    <li><a href="/team" onClick={(event) => {
                      event.preventDefault()
                      navigateToPage('team')
                    }}>Team</a></li>
                    <li><a href="/">Approach</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`mobile-menu-modal__nav-item ${isContactPage ? 'mobile-menu-modal__nav-item--active' : ''}`}>
              <a
                href="/contact"
                aria-current={isContactPage ? 'page' : undefined}
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

          <a
            className="mobile-menu-modal__getstarted"
            href="/contact"
            onClick={(event) => {
              event.preventDefault()
              navigateToPage('contact')
            }}
          >
            Get Started
          </a>

          <div className="mobile-menu-modal__socials" aria-label="Social links">
            <p className="mobile-menu-modal__socials-label">Follow us</p>
            <div className="mobile-menu-modal__socials-row">
              {socialLinks.map((socialLink) => (
                <a
                  key={socialLink.name}
                  href={socialLink.url}
                  aria-label={socialLink.name}
                  target="_blank"
                  rel="noreferrer"
                  title={socialLink.name}
                >
                  <img src={socialLink.icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isContactPage ? (
        <ContactPage onBack={() => navigateToPage('home')} />
      ) : isTeamPage ? (
        <TeamPage onHome={() => navigateToPage('home')} onContact={() => navigateToPage('contact')} />
      ) : isPortfolioPage ? (
        <PortfolioPage
          onHome={() => navigateToPage('home')}
          onContact={() => navigateToPage('contact')}
          currentPage={currentPage}
          onNavigate={navigateToPage}
        />
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
              <a
                className="site-header__getstarted hero-stage__getstarted"
                href="/contact"
                onClick={(event) => {
                  event.preventDefault()
                  navigateToPage('contact')
                }}
              >
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
                <a
                  className="service-card__button"
                  href="/contact"
                  onClick={(event) => {
                    event.preventDefault()
                    navigateToPage('contact')
                  }}
                >
                  Take the Style Quiz
                </a>
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
                <a
                  className="service-card__button"
                  href="/contact"
                  onClick={(event) => {
                    event.preventDefault()
                    navigateToPage('contact')
                  }}
                >
                  Meet with a Designer
                </a>
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

          <section className="lobby-cards__cta" aria-label="Get started call to action">
            <a
              className="site-header__getstarted lobby-cards__cta-button"
              href="/contact"
              onClick={(event) => {
                event.preventDefault()
                navigateToPage('contact')
              }}
            >
              Get Started
            </a>
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

          <section
            className="fusion-promise"
            style={{ backgroundImage: `url(${lobbyOneImage})` }}
            aria-label="The Fusion Promise"
          >
            <div className="fusion-promise__overlay" />
            <div className="fusion-promise__content">
              <h2>The Fusion Promise</h2>
              <div className="fusion-promise__grid">
                <div className="fusion-promise__item">
                  <div className="fusion-promise__icon-wrap">
                    <img
                      src="https://cdn.sanity.io/images/k02gtkzy/production/cf50513e5d5fe988d1356d9d02df18e0d68a0ae6-76x77.svg"
                      alt="Happiness guarantee icon"
                      loading="lazy"
                    />
                  </div>
                  <div className="fusion-promise__text-wrap">
                    <h3>Happiness guaranteed</h3>
                    <p>Love your design or it’s free.</p>
                  </div>
                </div>

                <div className="fusion-promise__item">
                  <div className="fusion-promise__icon-wrap">
                    <img
                      src="https://cdn.sanity.io/images/k02gtkzy/production/982f8f4044b4997828cd68fce983cdd1daef44a7-71x65.svg"
                      alt="Designer help on demand icon"
                      loading="lazy"
                    />
                  </div>
                  <div className="fusion-promise__text-wrap">
                    <h3>Designer help, on demand</h3>
                    <p>Talk to a real human whenever you need it.</p>
                  </div>
                </div>

                <div className="fusion-promise__item">
                  <div className="fusion-promise__icon-wrap">
                    <img
                      src="https://cdn.sanity.io/images/k02gtkzy/production/1ac8317c9df47e9575cf2d5f80d8800c4c65e1bf-100x74.svg"
                      alt="Members-only prices icon"
                      loading="lazy"
                    />
                  </div>
                  <div className="fusion-promise__text-wrap">
                    <h3>Members-only prices</h3>
                    <p>Exclusive discounts on hundreds of brands.</p>
                  </div>
                </div>
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
            <a
              className="site-header__getstarted room-cta__button"
              href="/contact"
              onClick={(event) => {
                event.preventDefault()
                navigateToPage('contact')
              }}
            >
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
              {socialLinks.map((socialLink) => (
                <li key={socialLink.name}>
                  <a href={socialLink.url} target="_blank" rel="noreferrer">
                    {socialLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="site-footer__legal">
          <p>© 2026 Fusion AI Design. All Rights Reserved.</p>

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