import React from 'react';

const Team = () => {
  return (
    <section className="quote-section bg-white premium-grain">
      <div className="container">
        <div className="quote-wrapper reveal">
          <h2 className="quote-text">
            "THERE IS NO <span className="text-green">SECOND PLACE</span> IN <span className="text-orange">POLITICS.</span>"
          </h2>
          <div className="quote-line"></div>
          <p className="quote-author text-blue">GROW RAPIDLY STRATEGIC SYSTEMS</p>
        </div>
      </div>

      <style>{`
                .quote-section {
                    padding: 120px 0;
                    text-align: center;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    background: var(--white);
                }

                .quote-text {
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                    font-family: var(--font-heading);
                    font-weight: 900;
                    line-height: 1.2;
                    text-transform: uppercase;
                }

                .quote-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .quote-line {
                    width: 100px;
                    height: 2px;
                    background: var(--brand-green);
                    margin: 40px 0;
                }

                .quote-author {
                    font-size: 1.25rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                }

                @media (max-width: 768px) {
                    .quote-section { padding: 150px 0; }
                }
            `}</style>
    </section>
  );
};

export default Team;
