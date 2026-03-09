import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="advantage-section bg-light premium-grain">
      <div className="container">
        <div className="advantage-top reveal">
          <span className="section-tag text-blue">Operational Excellence</span>
          <h2 className="section-head">STRATEGIC <span className="text-orange">SUPPORT.</span></h2>
        </div>
        <div className="advantage-grid reveal">
          <div className="support-card shadow-premium">
            <span className="card-icon text-green">⊚</span>
            <h3 className="card-title text-black">REAL-TIME MONITORING</h3>
            <p className="card-desc opacity-70">
              Our war rooms remain operational 24/7, providing continuous surveillance of the digital and ground-level electoral landscapes.
            </p>
          </div>
          <div className="support-card shadow-premium">
            <span className="card-icon text-blue">⊕</span>
            <h3 className="card-title text-black">STRATEGY OPTIMIZATION</h3>
            <p className="card-desc opacity-70">
              We utilize high-velocity data analytics to refine campaign messaging and tactical positioning in response to shifting public sentiment.
            </p>
          </div>
        </div>
      </div>

      <style>{`
                .advantage-section {
                    padding: var(--section-padding) 0;
                    position: relative;
                    background-color: #fcfcfc;
                    overflow: hidden;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }

                .advantage-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-top: 60px;
                }

                .support-card {
                    background: var(--white);
                    padding: 60px;
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: var(--transition);
                }

                .support-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 50px 100px rgba(0,0,0,0.06);
                }

                .card-icon {
                    font-size: 2.5rem;
                    display: block;
                    margin-bottom: 30px;
                }

                .card-title {
                    font-size: 1.25rem;
                    margin-bottom: 20px;
                    letter-spacing: 0.05em;
                }

                .card-desc {
                    font-size: 1rem;
                    line-height: 1.6;
                    max-width: 450px;
                }

                @media (max-width: 1024px) {
                    .advantage-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </section>
  );
};

export default WhyChooseUs;
