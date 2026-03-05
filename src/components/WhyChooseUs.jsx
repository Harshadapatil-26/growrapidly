import React from 'react'

const WhyChooseUs = () => {
  const points = [
    { title: "Strategic Precision", desc: "Data-driven insights to find and win the voters that matter." },
    { title: "Native Mobilization", desc: "Tools built to turn online energy into offline action." },
    { title: "Absolute Scale", desc: "Enterprise infrastructure that grows with your campaign's ambition." }
  ]

  return (
    <section id="why-us" className="why-section">
      <div className="container">
        <div className="why-grid reveal">
          <div className="why-header">
            <span className="section-tag">Powering Winners</span>
            <h2>Why leaders choose Grow Rapidly</h2>
          </div>
          <div className="why-points">
            {points.map((p, i) => (
              <div key={i} className="why-point">
                <div className="check-icon">✓</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .why-section {
          background-color: var(--white);
          padding: 100px 0;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }
        .why-header h2 {
          font-size: 3rem;
        }
        .why-points {
          display: grid;
          gap: 40px;
        }
        .why-point {
          display: flex;
          gap: 24px;
        }
        .check-icon {
          width: 32px;
          height: 32px;
          background: rgba(87, 176, 0, 0.08);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
        }
        .why-point h3 {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        .why-point p {
          color: var(--text-muted);
          font-size: 0.9375rem;
        }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default WhyChooseUs
