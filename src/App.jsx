import './App.css'

function App() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="Fusion Home">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5faebb4d55c63001e19a96d3/3f0bb9e3-71eb-4f35-b164-32c0d3e3a381/Fusion%2BFINALLogo-2022-Color.png"
          alt="Fusion"
        />
      </a>

      <nav className="site-header__nav" aria-label="Primary">
        <a href="/">Design, Explore, Learn, Shop</a>
      </nav>

      <div className="site-header__actions">
        <a className="site-header__login" href="/">
          Login
        </a>
        <a className="site-header__getstarted" href="/">
          GetStarted
        </a>
      </div>
    </header>
  )
}

export default App