import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-light">
      <div className="container">
        <div className="about-grid reveal">
          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">A modern Political Strategy and Digital Marketing agency</h2>
            <div className="about-body">
              <p>
                We specialize in political campaign strategy, public communication, and leadership branding. Our focus is on building strong political narratives, voter engagement strategies, and impactful digital presence for political leaders and campaigns.
              </p>
              <p>
                Along with political strategy, we also help businesses across various industries grow through smart digital marketing, branding, and lead generation strategies.
              </p>
              <p className="mission-highlight">
                Our mission is to combine strategic thinking, digital innovation, and ground-level insights to create real impact.
              </p>
              <div className="tagline-row">
                <span className="pill">Strategy</span>
                <span className="pill">Communication</span>
                <span className="pill">Growth</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-card">
              <div className="card-header">
                <div className="brand-dot green"></div>
                <div className="brand-dot blue"></div>
                <div className="brand-dot teal"></div>
              </div>
              <div className="card-content">
                <h3>Our Core Mission</h3>
                <p>Driving growth through intelligent storytelling and tactical precision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .about-light {
          background-color: var(--light-bg);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 100px;
          align-items: center;
        }
        .section-title {
          font-size: 3.5rem;
          margin-bottom: 2.5rem;
          color: var(--text);
        }
        .about-body p {
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .mission-highlight {
          font-weight: 700;
          color: var(--text) !important;
          border-left: 4px solid var(--primary);
          padding-left: 24px;
          margin: 2rem 0;
        }
        .tagline-row {
          display: flex;
          gap: 15px;
          margin-top: 3rem;
        }
        .pill {
          padding: 8px 20px;
          background: white;
          border: 1px solid var(--border);
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--primary);
        }
        .about-visual {
          position: relative;
        }
        .visual-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
        }
        .card-header {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
        }
        .brand-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .brand-dot.green { background: var(--primary); }
        .brand-dot.blue { background: var(--secondary); }
        .brand-dot.teal { background: var(--secondary-dark, #1A6A90); }
        
        .card-content h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }
        .card-content p {
          color: var(--text-muted);
          font-size: 0.9375rem;
        }
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 60px; }
          .section-title { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  )
}

export default About
