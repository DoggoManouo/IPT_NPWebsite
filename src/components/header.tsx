
function Header() {
return (
    <>
    <header className="header">
          <a className="brand" href="/" aria-label="Care home">
            <img src="/care-logo.svg" alt="Care" />
          </a>

          <nav aria-label="Main navigation">
            <a className="nav-item" href="/App" >
              Home
            </a>
            <a className="nav-item" href="/about">About</a>
            <button className="nav-item" type="button">FAQs</button>
            <button className="nav-item" type="button">News</button>
            <button className="nav-item" type="button">
              Leaderboards
            </button>
            <button className="button register" type="button">
              Register
            </button>
          </nav>
        </header>
    </>
);
}
export default Header;