import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-v3 premium-grain" id="home">
            <div className="hero-background">
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
                <div className="hero-image-wrap">
                    <img src="/images/backgrounds/hero_bg_v2.png" alt="Strategic Command Center" className="hero-image-main" />
                    <div className="hero-image-overlay"></div>
                </div>
            </div>

            <div className="container hero-interface">
                <div className="hero-branding">
                    <div className="system-status">
                        <span className="dot"></span>
                        <span className="status-text text-blue">Grow Rapidly Intelligence</span>
                    </div>
                </div>

                <div className="hero-core">
                    <div className="message-block reveal active">
                        <h1 className="hero-main-title">
                            <div className="title-row">
                                <span className="word">Strategy</span>
                                <span className="connector">for</span>
                                <span className="text-blue emphasis">Leaders.</span>
                            </div>
                            <div className="title-row">
                                <span className="word">Growth</span>
                                <span className="connector">for</span>
                                <span className="text-orange emphasis">Campaigns.</span>
                            </div>
                            <div className="title-row">
                                <span className="word">Impact</span>
                                <span className="connector">for the</span>
                                <span className="text-green emphasis">Nation.</span>
                            </div>
                        </h1>

                        <div className="hero-divider"></div>

                        <p className="hero-lead text-black">
                            We deliver institutional-grade political strategy.
                            Built on data science, psychological warfare, and an unwavering commitment to victory.
                        </p>

                        <div className="hero-btns">
                            <Link to="/services" className="btn-axiom-fill">
                                INITIATE OPERATION
                                <span className="btn-icon">→</span>
                            </Link>
                            <a href="#about" className="btn-axiom-outline">THE BLUEPRINT</a>
                        </div>
                    </div>
                </div>

                <div className="hero-footer-elements">
                    <div className="coordinate-block">
                        <span className="coord">28.6139° N, 77.2090° E</span>
                        <span className="coord-label text-blue">Operational Delta</span>
                    </div>
                    <div className="scroll-hint">
                        <div className="scroll-bar"></div>
                        <span className="scroll-label">Explore Strategy</span>
                    </div>
                    <div className="stat-quick">
                        <span className="stat-val text-orange">94.2%</span>
                        <span className="stat-tag">Win Probability</span>
                    </div>
                </div>
            </div>

            <style>{`
                .hero-v3 {
                    height: 100vh;
                    position: relative;
                    background: var(--white);
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    padding-top: var(--header-height);
                }

                .hero-background {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                }

                .hero-shapes {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    pointer-events: none;
                }

                .shape {
                    position: absolute;
                    filter: blur(80px);
                    opacity: 0.15;
                    border-radius: 50%;
                    animation: float 20s infinite alternate ease-in-out;
                }

                .shape-1 {
                    width: 400px;
                    height: 400px;
                    background: var(--brand-blue);
                    top: -100px;
                    left: -100px;
                }

                .shape-2 {
                    width: 300px;
                    height: 300px;
                    background: var(--brand-orange);
                    bottom: 10%;
                    right: 20%;
                    animation-delay: -5s;
                }

                @keyframes float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    100% { transform: translate(50px, 100px) rotate(30deg); }
                }

                .hero-image-wrap {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 55%;
                    height: 100%;
                    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
                }

                .hero-image-main {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(1) brightness(0.7) contrast(1.1);
                    opacity: 1;
                }

                .hero-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, var(--white) 0%, rgba(255,255,255,0.7) 30%, transparent 100%);
                }

                .hero-interface {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 40px 0;
                }

                .system-status {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .dot {
                    width: 6px;
                    height: 6px;
                    background: var(--brand-green);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--brand-green);
                    animation: statusPulse 2s infinite;
                }

                @keyframes statusPulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.3; }
                    100% { opacity: 1; }
                }

                .status-text {
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                }

                .hero-main-title {
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    line-height: 1.1;
                    margin-bottom: 30px;
                }

                .title-row {
                    display: flex;
                    align-items: baseline;
                    gap: 0.3em;
                    margin-bottom: 0.1em;
                }

                .connector {
                    font-size: 0.4em;
                    text-transform: lowercase;
                    font-weight: 500;
                    opacity: 0.6;
                    font-family: var(--font-main);
                    font-style: italic;
                }

                .emphasis {
                    font-weight: 900;
                }

                .hero-divider {
                    width: 120px;
                    height: 4px;
                    background: var(--black);
                    margin: 40px 0;
                }

                .hero-lead {
                    font-size: 1.25rem;
                    max-width: 550px;
                    line-height: 1.6;
                    margin-bottom: 50px;
                    opacity: 0.8;
                }

                .hero-btns {
                    display: flex;
                    gap: 20px;
                }

                .btn-axiom-fill {
                    background: var(--black);
                    color: var(--white);
                    padding: 22px 45px;
                    font-weight: 900;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    transition: var(--transition);
                }

                .btn-axiom-fill:hover {
                    background: var(--brand-green);
                    transform: translateY(-5px);
                }

                .btn-axiom-outline {
                    border: 2px solid var(--black);
                    color: var(--black);
                    padding: 22px 45px;
                    font-weight: 900;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.85rem;
                    transition: var(--transition);
                }

                .btn-axiom-outline:hover {
                    background: var(--black);
                    color: var(--white);
                }

                .hero-footer-elements {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .coordinate-block {
                    display: flex;
                    flex-direction: column;
                }

                .coord {
                    font-size: 0.7rem;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                }

                .coord-label {
                    font-size: 0.6rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-weight: 900;
                }

                .scroll-hint {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }

                .scroll-bar {
                    width: 2px;
                    height: 50px;
                    background: rgba(0,0,0,0.1);
                    position: relative;
                    overflow: hidden;
                }

                .scroll-bar::after {
                    content: '';
                    position: absolute;
                    top: -100%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--black);
                    animation: scrollAnim 2s infinite;
                }

                @keyframes scrollAnim {
                    0% { top: -100%; }
                    100% { top: 100%; }
                }

                .scroll-label {
                    font-size: 0.65rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    writing-mode: vertical-rl;
                }

                .stat-quick {
                    display: flex;
                    flex-direction: column;
                    text-align: right;
                }

                .stat-val {
                    font-size: 1.5rem;
                    font-weight: 900;
                    line-height: 1;
                }

                .stat-tag {
                    font-size: 0.6rem;
                    text-transform: uppercase;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    opacity: 0.6;
                }

                @media (max-width: 1024px) {
                    .hero-image-wrap {
                        width: 100%;
                        clip-path: none;
                        opacity: 0.3;
                    }
                    .hero-image-overlay {
                        background: linear-gradient(to bottom, var(--white) 0%, transparent 50%, var(--white) 100%);
                    }
                    .hero-footer-elements {
                        display: none;
                    }
                    .hero-main-title {
                        font-size: 2.5rem;
                    }
                    .hero-btns {
                        flex-direction: column;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
