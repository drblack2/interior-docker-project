export default function Navbar({ activePage, onNavigate }) {
  const links = ['Home', 'Services', 'Portfolio', 'About', 'Contact', 'Consultation', 'Admin'];

  const handleNavigate = (page) => {
    onNavigate(page);
    window.history.replaceState(null, '', `/${page === 'Home' ? '' : page.toLowerCase()}`);
  };

  return (
    <header className="navbar">
      <div className="brand" onClick={() => handleNavigate('Home')}>
        Interior Vista
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link}
            className={activePage === link ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigate(link)}
            type="button"
          >
            {link}
          </button>
        ))}
      </div>
    </header>
  );
}
