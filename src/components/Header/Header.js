import './Header.css';

export const Header = () =>
  <header className="Header">
    <div className="Header-logo"><span className='Header-logo-No'>No</span><span className='Header-logo-se-A'>se A</span><span className='Header-logo-ge'>ge</span></div>
    <nav className="Header-nav">
      <a href="https://discord.com/invite/t5wc8x2Htz" className="Header-nav-link">
        <img
          src="https://www.svgrepo.com/show/353655/discord-icon.svg"
          alt="Discord"
          width={30}
        />
      </a>
      <a href="https://twitter.com/noseagenft" className="Header-nav-link">
        <img
          src="https://www.svgrepo.com/show/183608/twitter.svg"
          alt="Twitter"
          width={30}
        />
      </a>
      <a href="https://noseage.gitbook.io">Aitepaper</a>
    </nav>
  </header>