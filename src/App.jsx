import './App.css'
import heroImage from '../assets/hero.jpg'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="site-header__brand" href="/" aria-label="Fusion Home">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/3f0bb9e3-71eb-4f35-b164-32c0d3e3a381/Fusion%2BFINALLogo-2022-Color.png"
            alt="Fusion"
          />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <ul className="site-header__nav-list">
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Explore</a>
            </li>
            <li>
              <a href="/">Learn</a>
            </li>
            <li>
              <a href="/">Shop</a>
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

      <main className="hero-stage" aria-label="Hero background">
        <div
          className="hero-stage__media"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
      </main>
    </>
  )
}

export default App