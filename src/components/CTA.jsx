import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="final-cta dark-section">
      <div className="container">
        <div className="cta-box reveal">
          <h2>Get started in 15 minutes or less</h2>
          <div className="cta-btns">
            <a href="#" className="btn btn-primary">Start Your Campaign</a>
            <a href="#" className="btn btn-secondary">Book a Demo</a>
          </div>
        </div>
      </div>
      <style>{`
        .final-cta {
          padding: 160px 0;
          background-color: var(--secondary);
          text-align: center;
        }
        .final-cta h2 {
          color: var(--white);
        }
        .cta-box h2 {
          font-size: 4rem;
          margin-bottom: 48px;
        }
        .cta-btns {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        @media (max-width: 600px) {
          .cta-box h2 { font-size: 2.5rem; }
          .cta-btns { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}

export default CTA
