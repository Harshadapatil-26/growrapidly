import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-white premium-grain">
      <div className="container">
        <div className="footer-main">
          <h2 className="display-title">READY TO <span className="text-green">WIN?</span></h2>
          <div className="footer-links-grid">
            <div className="f-col">
              <span className="col-tag text-green">Strategize</span>
              <a href="/#about">The Winning Anyway Mindset</a>
              <Link to="/services">Battleground Intelligence</Link>
              <a href="/#strategy">The Blueprint</a>
            </div>
            <div className="f-col">
              <span className="col-tag text-blue">Connect</span>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
            <div className="f-col">
              <span className="col-tag text-orange">Engage</span>
              <a href="#contact">Contact Strategy</a>
              <a href="/#why-us">Newsletter Brief</a>
              <a href="#">Privacy Systems</a>
            </div>
          </div>

          <div className="footer-bottom-line">
            <div className="f-logo">
              <img src={logo} alt="Grow Rapidly" />
              <span className="text-black">GROW RAPIDLY</span>
            </div>
            <p className="copyright opacity-70 text-black">© 2026 GROW RAPIDLY STRATEGIC SYSTEMS. BUILT TO WIN.</p>
          </div>
        </div>
      </div>

      <style>{`
                .footer {
                    padding: 140px 0 60px;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    background: var(--white);
                }

                .footer-main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .footer-links-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 100px;
                    margin-top: 100px;
                    width: 100%;
                    max-width: 1000px;
                }

                .col-tag {
                    display: block;
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    margin-bottom: 2rem;
                }

                .f-col a {
                    display: block;
                    color: var(--black);
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 1rem;
                    margin-bottom: 1rem;
                    opacity: 0.7;
                    transition: var(--transition);
                }

                .f-col a:hover {
                    opacity: 1;
                    color: var(--brand-green);
                }

                .footer-bottom-line {
                    margin-top: 140px;
                    width: 100%;
                    padding-top: 40px;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .f-logo {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .f-logo img {
                    height: 30px;
                }

                .f-logo span {
                    font-weight: 900;
                    letter-spacing: 0.1em;
                }

                .copyright {
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 768px) {
                    .footer-links-grid { grid-template-columns: 1fr; gap: 60px; }
                    .footer-bottom-line { flex-direction: column; gap: 30px; }
                }
            `}</style>
    </footer>
  );
};

export default Footer;
