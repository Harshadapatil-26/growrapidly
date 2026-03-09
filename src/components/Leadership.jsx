import React from 'react';

const Leadership = () => {
  const leaders = [
    {
      name: "Bipin M. Jagtap",
      role: "FOUNDER & CEO",
      img: "/images/team/bipin.png"
    },
    {
      name: "Prathamesh G. Pawar",
      role: "CMO",
      img: "/images/team/prathamesh.png"
    }
  ];

  return (
    <section id="leadership" className="leadership premium-grain">
      <div className="container">
        <div className="leadership-top reveal text-center">
          <h2 className="display-title">
            OUR <span className="text-green">STRATEGIC</span> BOARD
          </h2>
          <p className="text-black opacity-70 max-800 mx-auto">
            Experienced advisors navigating the intersection of technology,
            narrative, and political mobilization.
          </p>
        </div>

        <div className="leadership-grid reveal">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <div className="leader-img-frame">
                <img src={leader.img} alt={leader.name} className="leader-img" />
                <div className="leader-accent bg-green"></div>
              </div>
              <div className="leader-info">
                <h3 className="leader-name text-black">{leader.name}</h3>
                <p className="leader-role text-green">{leader.role}</p>
                <div className="leader-social">
                  <span className="social-icon">IN</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="leadership-mission reveal">
          <div className="mission-stats">
            <div className="m-stat">
              <span className="m-val text-green">24/7</span>
              <span className="m-label">Strategic Support</span>
            </div>
            <div className="m-stat">
              <span className="m-val text-blue">94%</span>
              <span className="m-label">Voter Engagement</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .text-center { text-align: center; }
                .mx-auto { margin-left: auto; margin-right: auto; }

                .leadership {
                    padding: var(--section-padding) 0;
                    background: var(--white);
                }

                .leadership-top {
                    margin-bottom: 100px;
                }

                .leadership-top h2 {
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                }

                .leadership-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 60px;
                    max-width: 1000px;
                    margin: 0 auto 100px;
                }

                .leader-card {
                    text-align: center;
                }

                .leader-img-frame {
                    position: relative;
                    margin-bottom: 30px;
                }

                .leader-img {
                    width: 100%;
                    aspect-ratio: 1/1;
                    object-fit: cover;
                    filter: grayscale(1) contrast(1.1) brightness(1.1);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: var(--transition);
                }

                .leader-card:hover .leader-img {
                    filter: grayscale(0);
                    transform: scale(1.02);
                }

                .leader-accent {
                    position: absolute;
                    bottom: -10px;
                    right: -10px;
                    width: 60px;
                    height: 60px;
                    z-index: -1;
                    opacity: 0.1;
                }

                .leader-name {
                    font-size: 1.5rem;
                    margin-bottom: 5px;
                    letter-spacing: 0.02em;
                }

                .leader-role {
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 20px;
                }

                .leader-social {
                    display: flex;
                    justify-content: center;
                }

                .social-icon {
                    width: 24px;
                    height: 24px;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.6rem;
                    font-weight: 900;
                    color: rgba(0,0,0,0.4);
                }

                .mission-stats {
                    display: flex;
                    justify-content: center;
                    gap: 100px;
                    padding-top: 80px;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }

                .m-stat {
                    text-align: center;
                }

                .m-val {
                    display: block;
                    font-size: 3rem;
                    font-weight: 900;
                    font-family: var(--font-heading);
                    line-height: 1;
                    margin-bottom: 10px;
                }

                .m-label {
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    opacity: 0.6;
                }

                @media (max-width: 768px) {
                    .leadership-grid { grid-template-columns: 1fr; gap: 40px; }
                    .mission-stats { gap: 40px; flex-direction: column; }
                }
            `}</style>
    </section>
  );
};

export default Leadership;
