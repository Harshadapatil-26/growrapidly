import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-info">
            <div className="logo footer-logo">
              <img src="/images/logo.png" alt="Grow Rapidly Logo" className="logo-img" />
              <span>&reg; GROW RAPIDLY</span>
            </div>
            <p>Strategy. Communication. Growth. <br />The platform for modern political leadership.</p>
            <div className="social-grid">
              <a href="#" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>LN</a>
              <a href="#" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>TW</a>
              <a href="#" style={{ backgroundColor: 'var(--primary-dark)', color: 'white' }}>YT</a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="link-col">
              <h4>Software</h4>
              <a href="#">Advocacy</a>
              <a href="#">Database</a>
              <a href="#">Donations</a>
              <a href="#">Communications</a>
            </div>
            <div className="link-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Case Studies</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="link-col">
              <h4>Resources</h4>
              <a href="#">Academy</a>
              <a href="#">Support</a>
              <a href="#">Documentation</a>
              <a href="#">API</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Grow Rapidly Strategic Systems. All rights reserved.</p>
          <div className="legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <style>{`
        .site-footer {
          padding: 100px 0 60px;
          background: var(--white);
          border-top: 1px solid var(--border);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 100px;
          margin-bottom: 80px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 900;
          font-size: 1.1rem;
          color: var(--text);
          margin-bottom: 24px;
        }
        .logo-img {
          height: 32px;
          width: auto;
        }
        .site-footer p {
          color: var(--text-muted);
          font-size: 0.9375rem;
          margin-bottom: 32px;
        }
        .social-grid {
          display: flex;
          gap: 16px;
        }
        .social-grid a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.75rem;
          transition: var(--transition);
        }
        .social-grid a:hover {
          transform: translateY(-3px);
          filter: brightness(1.1);
        }
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .link-col h4 {
          font-size: 0.875rem;
          text-transform: uppercase;
          margin-bottom: 24px;
          color: var(--text);
          border-left: 3px solid var(--primary);
          padding-left: 12px;
        }
        .link-col a {
          display: block;
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.875rem;
          margin-bottom: 12px;
          transition: var(--transition);
        }
        .link-col a:hover {
          color: var(--primary);
        }
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8125rem;
          color: var(--text-muted);
        }
        .legal {
          display: flex;
          gap: 24px;
        }
        .legal a {
          text-decoration: none;
          color: var(--text-muted);
        }
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr; gap: 60px; }
          .footer-links-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </footer>
  )
}

export default Footer
