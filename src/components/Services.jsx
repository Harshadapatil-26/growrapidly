import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { title: "Campaign Strategy", icon: "⊕", color: "var(--brand-green)" },
    { title: "Social Media Management", icon: "⊚", color: "var(--brand-blue)" },
    { title: "Leadership Branding", icon: "⊡", color: "var(--brand-orange)" },
    { title: "Constituency Strategy", icon: "⊞", color: "var(--black)" },
    { title: "Digital Advertising", icon: "⊠", color: "var(--brand-green)" },
    { title: "Content Creation", icon: "⊛", color: "var(--brand-blue)" },
    { title: "Business Marketing", icon: "⊡", color: "var(--brand-orange)" },
    { title: "24/7 Strategic Support", icon: "⊘", color: "var(--brand-green)" },
  ];

  return (
    <section id="services" className="services bg-white premium-grain">
      <div className="container">
        <div className="services-top reveal">
          <span className="section-tag text-blue">Battle Tested Capabilities</span>
          <h2 className="section-head">STRATEGIC <span className="text-orange">POWER.</span></h2>
        </div>

        <div className="capabilities-grid reveal">
          {services.map((item, index) => (
            <div key={index} className="cap-card shadow-hover-lift">
              <div className="cap-accent" style={{ background: item.color }}></div>
              <div className="cap-body">
                <span className="cap-icon" style={{ color: item.color }}>{item.icon}</span>
                <h3 className="cap-name text-black">{item.title}</h3>
                <p className="cap-desc opacity-70">Surgical implementation for national-level dominance.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="philosophy-strip reveal">
          <div className="philosophy-header">
            <span className="section-tag text-green">Strategy Philosophy</span>
            <h2 className="display-title">WE DON'T <span className="text-blue">GUESS.</span> WE PLAN, PRESSURE, AND <span className="text-orange">EXECUTE.</span></h2>
          </div>
          <div className="philosophy-cta">
            <Link to="/services" className="btn-axiom-outline">VIEW FULL CAPABILITIES</Link>
          </div>
        </div>
      </div>

      <style>{`
                .services {
                    padding: var(--section-padding) 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .capabilities-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                    margin: 80px 0 120px;
                }

                .cap-card {
                    background: #fdfdfd;
                    border: 1px solid rgba(0,0,0,0.05);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .cap-accent {
                    height: 4px;
                    width: 100%;
                }

                .cap-body {
                    padding: 40px;
                }

                .cap-icon {
                    font-size: 2rem;
                    display: block;
                    margin-bottom: 25px;
                }

                .cap-name {
                    font-size: 1.15rem;
                    margin-bottom: 15px;
                    letter-spacing: 0.02em;
                }

                .cap-desc {
                    font-size: 0.9rem;
                    line-height: 1.6;
                    text-transform: none;
                }

                .philosophy-strip {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 100px;
                    align-items: center;
                    padding-top: 100px;
                    border-top: 1px solid rgba(0,0,0,0.1);
                }

                .philosophy-strip h2 {
                    margin-top: 20px;
                    max-width: 800px;
                    line-height: 1.1;
                }

                @media (max-width: 1200px) {
                    .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
                    .philosophy-strip { grid-template-columns: 1fr; gap: 40px; }
                }

                @media (max-width: 600px) {
                    .capabilities-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </section>
  );
};

export default Services;
