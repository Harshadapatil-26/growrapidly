import React from 'react';

const Impact = () => {
  return (
    <section id="impact" className="impact bg-white premium-grain">
      <div className="impact-image-overlay">
        <img src="/images/backgrounds/impact_bg.png" alt="Indian Electoral Strength" />
      </div>
      <div className="container">
        <div className="impact-center reveal">
          <h2 className="display-title">
            LOCAL <span className="text-green">INSTINCT.</span><br />
            NATIONAL <span className="text-blue">MUSCLE.</span>
          </h2>
          <p className="text-black opacity-70 impact-lead">
            We've spent a decade in the grime of ground politics and the velocity of digital war rooms.
            We know exactly how to move the needle where it matters most.
          </p>
          <div className="impact-cta">
            <a href="#contact" className="btn btn-black">INITIATE OPERATIONS</a>
          </div>
        </div>
      </div>

      <style>{`
                .impact {
                    padding: 200px 0;
                    text-align: center;
                    position: relative;
                    background: var(--white);
                    overflow: hidden;
                }

                .impact-image-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                }

                .impact-image-overlay img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.08;
                    filter: grayscale(1);
                }

                .impact-center {
                    position: relative;
                    z-index: 10;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .impact-lead {
                    font-size: 1.5rem;
                    margin: 40px auto;
                    max-width: 700px;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .impact { padding: 120px 0; }
                    .impact-lead { font-size: 1.25rem; }
                }
            `}</style>
    </section>
  );
};

export default Impact;
