import React from 'react'

const CTA = () => {


  return (
    <section id="contact" className="contact-section premium-grain">
      <div className="container">
        <div className="contact-grid reveal">
          <div className="contact-info">
            <span className="section-tag text-blue">The Strategic Entry</span>
            <h2 className="display-title">INITIATE <br /><span className="text-orange">ENGAGEMENT.</span></h2>
            <p className="contact-subtitle text-black opacity-70">
              Direct access to our lead strategic advisors.
              Serious inquiries only. We select our clients based on alignment and winning potential.
            </p>
          </div>

          <div className="contact-form-wrapper shadow-premium">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="FULL NAME" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="EMAIL ADDRESS" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="" disabled selected>SELECT SERVICE</option>
                  <option>CAMPAIGN STRATEGY</option>
                  <option>SOCIAL MEDIA MANAGEMENT</option>
                  <option>LEADERSHIP BRANDING</option>
                  <option>CONSTITUENCY STRATEGY</option>
                  <option>DIGITAL ADVERTISING</option>
                  <option>CONTENT CREATION</option>
                  <option>BUSINESS MARKETING</option>
                  <option>24/7 STRATEGIC SUPPORT</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="PROJECT MESSAGE" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn uppercase">Initiate Strategy <span className="arrow">→</span></button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .contact-section {
          background-color: var(--white);
          padding: 160px 0;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: flex-start;
        }
        
        .contact-subtitle {
          font-size: 1.25rem;
          margin-top: 30px;
          line-height: 1.6;
        }

        .contact-form-wrapper {
          background: #fcfcfc;
          padding: 60px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 40px 100px rgba(0,0,0,0.05);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          padding: 20px;
          border: 2px solid var(--black);
          background: transparent;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: var(--transition);
          outline: none;
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          border-color: var(--brand-green);
        }

        .submit-btn {
          background: var(--black);
          color: var(--white);
          border: none;
          padding: 25px;
          font-weight: 900;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: var(--transition);
        }

        .submit-btn:hover {
          background: var(--brand-green);
          transform: translateY(-5px);
        }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 60px; }
          .contact-form-wrapper { padding: 40px 20px; }
        }
      `}</style>
    </section>
  );
};

export default CTA;
