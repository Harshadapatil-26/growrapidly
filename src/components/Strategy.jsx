import React from 'react';

const Strategy = () => {
  return (
    <section id="strategy" className="strategy bg-white premium-grain">
      <div className="container">
        <div className="strategy-split reveal">
          <div className="strat-left">
            <span className="section-tag text-blue">Battleground Intelligence</span>
            <h2 className="display-title">THE <span className="text-green">WINNING</span><br />BLUEPRINT.</h2>
            <div className="strat-steps">
              <div className="strat-step">
                <span className="step-num text-green">01</span>
                <div className="step-txt">
                  <h3 className="text-black">SURVEILLANCE</h3>
                  <p className="text-black opacity-70">Deep-dive data mining and voter sentiment architecture.</p>
                </div>
              </div>
              <div className="strat-step">
                <span className="step-num text-blue">02</span>
                <div className="step-txt">
                  <h3 className="text-black">POSITIONING</h3>
                  <p className="text-black opacity-70">Surgical brand development and leadership framing.</p>
                </div>
              </div>
              <div className="strat-step">
                <span className="step-num text-orange">03</span>
                <div className="step-txt">
                  <h3 className="text-black">EXECUTION</h3>
                  <p className="text-black opacity-70">High-velocity digital blitz and ground mobilization.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="strat-right">
            <div className="strat-graphic">
              <div className="data-card">
                <h4 className="text-green uppercase">Target Acquired</h4>
                <div className="data-line bg-green"></div>
                <p className="text-black">We identify the undecided 5% that decide the 100%.</p>
              </div>
              <div className="data-card offset">
                <h4 className="text-orange uppercase">War Room Active</h4>
                <div className="data-line bg-orange"></div>
                <p className="text-black">24/7 Monitoring. Instant narrative adjustment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .strategy {
                    padding: var(--section-padding) 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .strategy-split {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 100px;
                    align-items: center;
                }

                .strat-steps {
                    margin-top: 60px;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .strat-step {
                    display: flex;
                    gap: 30px;
                }

                .step-num {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    font-weight: 900;
                    line-height: 1;
                    padding-top: 5px;
                }

                .step-txt h3 {
                    font-size: 1.25rem;
                    margin-bottom: 10px;
                }

                .strat-right {
                    position: relative;
                }

                .strat-graphic {
                    position: relative;
                    padding: 40px;
                }

                .data-card {
                    background: #fcfcfc;
                    border: 1px solid rgba(0,0,0,0.05);
                    padding: 40px;
                    margin-bottom: 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.03);
                }

                .data-card.offset {
                    margin-left: 60px;
                }

                .data-line {
                    height: 1px;
                    width: 60px;
                    margin: 20px 0;
                }

                @media (max-width: 1024px) {
                    .strategy-split { grid-template-columns: 1fr; gap: 60px; }
                    .data-card.offset { margin-left: 0; }
                }
            `}</style>
    </section>
  );
};

export default Strategy;
