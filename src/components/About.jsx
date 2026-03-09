import React from 'react';

const About = () => {
  return (
    <section id="about" className="about premium-grain">
      <div className="container">
        <div className="about-split reveal">
          <div className="about-image">
            <img
              src="/images/backgrounds/about_bg.png"
              alt="Indian Strategic Advantage"
              className="gritty-img"
            />
            <div className="img-overlay-light"></div>
          </div>
          <div className="about-text">
            <span className="section-tag text-blue">The Institutional Mindset</span>
            <h2 className="display-title">
              WE JUST KEEP <br />
              <span className="text-green">WINNING</span> ANYWAY.
            </h2>
            <p className="lead-text text-black">
              In a world of noise, we deliver signal. Our firm isn't built on theory; it's built on a decade of
              electoral dominance in the most complex political landscapes in the world.
            </p>
            <div className="btn-wrap">
              <a href="#contact" className="btn btn-black">Discuss The Blueprint</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .about {
                    padding: var(--section-padding) 0;
                    background: var(--white);
                }

                .about-split {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 100px;
                    align-items: center;
                }

                .about-image {
                    position: relative;
                    height: 600px;
                }

                .gritty-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(1) brightness(1.2);
                }

                .img-overlay-light {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(255,255,255,0.2), var(--white));
                    z-index: 2;
                }

                .about-text {
                    position: relative;
                    z-index: 10;
                }

                .lead-text {
                    font-size: 1.5rem;
                    line-height: 1.6;
                    margin: 40px 0;
                    opacity: 0.8;
                }

                @media (max-width: 1024px) {
                    .about-split { grid-template-columns: 1fr; gap: 60px; }
                    .about-image { height: 400px; }
                }
            `}</style>
    </section>
  );
};

export default About;
