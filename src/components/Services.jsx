import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: "Political Campaign Strategy",
      description: "We design complete campaign strategies including voter outreach, messaging, and communication planning to help political leaders run effective and impactful campaigns.",
      icon: "🎯",
      accent: "var(--primary)"
    },
    {
      title: "Political Social Media Management",
      description: "Our team manages political social media accounts with engaging content, reels, graphics, and regular updates to maintain a strong connection with voters.",
      icon: "📱",
      accent: "var(--secondary)"
    },
    {
      title: "Leadership Branding",
      description: "We help leaders build a powerful public identity through strategic messaging, storytelling, and digital positioning to strengthen their image among citizens.",
      icon: "👑",
      accent: "var(--secondary)"
    },
    {
      title: "Constituency Strategy & Ground Planning",
      description: "We create constituency-focused strategies based on local issues, voter behavior, and ground-level insights to improve public engagement.",
      icon: "🗺️",
      accent: "var(--primary)"
    },
    {
      title: "Digital Advertising Campaigns",
      description: "We run targeted digital campaigns to reach the right audience, increase visibility, and strengthen the impact of political and business campaigns.",
      icon: "📣",
      accent: "var(--secondary)"
    },
    {
      title: "Content Creation & Political Messaging",
      description: "Our team creates impactful content including campaign messages, videos, graphics, and speeches that clearly communicate the leader’s vision.",
      icon: "✍️",
      accent: "var(--primary)"
    },
    {
      title: "Business Digital Marketing",
      description: "Along with political strategy, we provide digital marketing services for businesses including branding, social media marketing, and lead generation.",
      icon: "💼",
      accent: "var(--primary)"
    }
  ]

  const serviceSlugs = [
    "political-campaign-strategy",
    "political-social-media-management",
    "leadership-branding",
    "constituency-strategy-ground-planning",
    "digital-advertising-campaigns",
    "content-creation-political-messaging",
    "business-digital-marketing"
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header reveal">
          <span className="section-tag">Elite Services</span>
          <h2>Strategic solutions designed to <br />elevate your <span className="muted">political impact</span></h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-product-card reveal">
              <div className="card-mockup" style={{ backgroundColor: `${service.accent}10` }}>
                <div className="mockup-ui">
                  <div className="ui-dot" style={{ backgroundColor: service.accent }}></div>
                  <div className="ui-dot"></div>
                  <div className="ui-bar"></div>
                </div>
                <div className="mockup-content">{service.icon}</div>
              </div>
              <div className="card-info">
                <h3 style={{ color: service.accent }}>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  to={`/services/${serviceSlugs[index]}`}
                  className="card-link"
                  style={{ color: service.accent }}
                >
                  Explore Service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .services-section {
          background-color: var(--light-bg);
          padding: 140px 0;
        }
        .services-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .services-header h2 {
          max-width: 800px;
          margin: 0 auto;
        }
        .services-header .muted {
          color: var(--text-muted);
          font-weight: 400;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }
        .service-product-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .service-product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .card-mockup {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-bottom: 1px solid var(--border);
        }
        .mockup-ui {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 6px;
        }
        .ui-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0,0,0,0.1);
        }
        .ui-bar {
          width: 40px;
          height: 8px;
          border-radius: 4px;
          background: rgba(0,0,0,0.05);
        }
        .mockup-content {
          font-size: 3rem;
          opacity: 0.8;
        }
        .card-info {
          padding: 32px;
        }
        .card-info h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          line-height: 1.35;
        }
        .card-info p {
          font-size: 0.9375rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .card-link {
          text-decoration: none;
          font-weight: 700;
          font-size: 0.875rem;
          transition: var(--transition);
        }
        .card-link:hover {
          opacity: 0.7;
        }
      `}</style>
    </section>
  )
}

export default Services
