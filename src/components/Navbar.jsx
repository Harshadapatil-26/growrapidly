import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/#leadership' },
    { name: 'Leadership', href: '/#leadership' },
    { name: 'Support', href: '/#why-us' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Grow Rapidly" className="logo-img" />
          <span className="logo-text text-black">GROW <span className="text-green">RAPIDLY</span></span>
        </Link>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith('/#') || link.href === '/' ? (
                <a
                  href={link.href}
                  className="nav-link text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="nav-link text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li className="mobile-only">
            <a href="#contact" className="btn btn-green">LET'S TALK</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-green desktop-only">LET'S TALK</a>
          <button
            className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
          </button>
        </div>
      </div>

      <style>{`
                .navbar {
                    height: var(--header-height);
                    display: flex;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: transparent;
                    transition: var(--transition);
                }

                .navbar.scrolled {
                    background-color: var(--white);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    height: 80px;
                }

                .nav-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }

                .nav-logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                }

                .logo-img {
                    height: 40px;
                }

                .logo-text {
                    font-family: var(--font-heading);
                    font-weight: 900;
                    font-size: 1.25rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 40px;
                    align-items: center;
                }

                .nav-link {
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    transition: var(--transition);
                    opacity: 0.8;
                }

                .nav-link:hover {
                    opacity: 1;
                    color: var(--brand-green);
                }

                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .bg-white { background-color: var(--white) !important; }
                .bg-black { background-color: var(--black) !important; }

                .desktop-only { display: flex; }
                .mobile-only { display: none; }

                .menu-toggle {
                    display: none;
                    flex-direction: column;
                    gap: 6px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    z-index: 1001;
                }

                .menu-toggle span {
                    display: block;
                    width: 28px;
                    height: 2px;
                    transition: var(--transition);
                }

                @media (max-width: 1024px) {
                    .nav-menu {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 100%;
                        height: 100vh;
                        background: var(--white);
                        flex-direction: column;
                        justify-content: center;
                        padding: 60px;
                        transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    }

                    .nav-menu.active { right: 0; }
                    .nav-menu.active .nav-link { color: var(--black); }
                    .menu-toggle { display: flex; }
                    .desktop-only { display: none; }
                    .mobile-only { display: block; }
                    .nav-link { font-size: 2rem; margin-bottom: 30px; }
                }

                .menu-toggle.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); background-color: var(--black) !important; }
                .menu-toggle.active span:nth-child(2) { opacity: 0; }
                .menu-toggle.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); background-color: var(--black) !important; }
            `}</style>
    </nav>
  );
};

export default Navbar;
