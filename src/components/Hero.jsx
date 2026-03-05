import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    { src: '/images/hero/campaign.png', alt: 'Political Campaign', className: 'card-1', parallax: 0.1 },
    { src: '/images/hero/speaking.png', alt: 'Public Speaking', className: 'card-2', parallax: 0.15 },
    { src: '/images/hero/discussion.png', alt: 'Team Discussion', className: 'card-3', parallax: 0.05 },
    { src: '/images/hero/dashboard.png', alt: 'Digital Dashboard', className: 'card-4', parallax: 0.2 },
    { src: '/images/hero/engagement.png', alt: 'Voter Engagement', className: 'card-5', parallax: 0.12 },
    { src: '/images/hero/meeting.png', alt: 'Leadership Meeting', className: 'card-6', parallax: 0.08 },
  ];

  return (
    <section className="hero-modern premium-grain">
      <div className="container hero-grid">
        <div className="hero-text-content reveal active">
          <h1 className="hero-headline">
            Strategy for Leaders<br />
            <span className="text-highlight">Growth</span> for <span className="text-highlight">Campaigns</span><br />
            Impact for the Nation
          </h1>
          <p className="hero-subheadline">
            A modern political strategy and digital marketing agency helping leaders build strong public narratives, powerful campaigns, and meaningful engagement with citizens.
          </p>
          <div className="hero-cta-group">
            <a href="#start" className="btn-hero-primary">Start Your Campaign Strategy</a>
            <a href="#services" className="btn-hero-secondary">Explore Services</a>
          </div>
        </div>

        <div className="hero-visual-system">
          {images.map((img, index) => (
            <div
              key={index}
              className={`floating-image-card ${img.className}`}
              style={{ transform: `translateY(${scrollY * img.parallax}px)` }}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-modern {
          background-color: var(--light-bg);
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0;
          overflow: hidden;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .hero-headline {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          color: var(--text);
          font-weight: 800;
          margin-bottom: 32px;
          letter-spacing: -0.02em;
        }

        .text-highlight {
          color: #57B000;
        }

        .hero-subheadline {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 600px;
          margin-bottom: 48px;
        }

        .hero-cta-group {
          display: flex;
          gap: 20px;
        }

        .btn-hero-primary {
          background-color: var(--primary);
          color: var(--white);
          padding: 18px 36px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(87, 176, 0, 0.2);
        }

        .btn-hero-primary:hover {
          background-color: var(--secondary);
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(40, 151, 197, 0.3);
        }

        .btn-hero-secondary {
          background-color: transparent;
          color: var(--text);
          padding: 18px 36px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          border: 2px solid var(--border);
          transition: all 0.3s ease;
        }

        .btn-hero-secondary:hover {
          background-color: var(--secondary);
          color: var(--white);
          border-color: var(--secondary);
        }

        .hero-visual-system {
          position: relative;
          height: 600px;
          width: 100%;
        }

        .floating-image-card {
          position: absolute;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: float 6s ease-in-out infinite;
          background: white;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .floating-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Responsive positioning */
        .card-1 { width: 280px; height: 180px; top: -50px; right: 0; animation-delay: 0s; z-index: 5; }
        .card-2 { width: 320px; height: 200px; top: 180px; right: -80px; animation-delay: 1s; z-index: 6; }
        .card-3 { width: 240px; height: 160px; bottom: 0; right: 20px; animation-delay: 2s; z-index: 4; }
        .card-4 { width: 200px; height: 140px; top: 120px; left: -150px; opacity: 0.6; animation-delay: 1.5s; z-index: 1; filter: blur(1px); }
        .card-5 { width: 220px; height: 150px; bottom: 180px; left: -100px; opacity: 0.4; animation-delay: 2.5s; z-index: 1; filter: blur(2px); }
        .card-6 { width: 180px; height: 120px; top: 380px; right: 240px; animation-delay: 0.5s; z-index: 3; }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-subheadline { margin: 0 auto 48px; }
          .hero-cta-group { justify-content: center; }
          .hero-visual-system { height: 400px; margin-top: 60px; }
          .card-2 { right: 0; }
          .card-4, .card-5 { display: none; }
        }

        @media (max-width: 768px) {
          .hero-modern { padding: 80px 0; }
          .hero-headline { font-size: 2.5rem; }
          .hero-cta-group { flex-direction: column; }
          .hero-visual-system { height: 300px; }
          .card-1 { width: 200px; height: 130px; }
          .card-2 { width: 240px; height: 150px; top: 100px; }
          .card-3 { width: 180px; height: 120px; }
        }

        /* Fade-up animation for text */
        .reveal.active {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default Hero

