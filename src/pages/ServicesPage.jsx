import React, { useEffect } from 'react';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const servicesList = [
        {
            id: "01",
            title: "Political Campaign Strategy",
            tag: "Comprehensive Roadmap",
            description: "We design complete campaign strategies including voter outreach, messaging, and communication planning to help political leaders run effective and impactful campaigns.",
            features: ["Targeted Voter Outreach", "Strategic Messaging", "Communication Mapping"],
            img: "/images/backgrounds/hero_bg_v2.png"
        },
        {
            id: "02",
            title: "Political Social Media Management",
            tag: "Digital Domination",
            description: "Our team manages political social media accounts with engaging content, reels, graphics, and regular updates to maintain a strong connection with voters.",
            features: ["Viral Reels & Content", "Graphics Engineering", "Voter Engagement Hubs"],
            img: "/images/backgrounds/about_bg.png"
        },
        {
            id: "03",
            title: "Leadership Branding",
            tag: "Iconic Positioning",
            description: "We help leaders build a powerful public identity through strategic messaging, storytelling, and digital positioning to strengthen their image among citizens.",
            features: ["Strategic Storytelling", "Digital Persona Building", "Messaging Frameworks"],
            img: "/images/backgrounds/leadership_bg.png"
        },
        {
            id: "04",
            title: "Constituency Strategy & Ground Planning",
            tag: "Local Intelligence",
            description: "We create constituency-focused strategies based on local issues, voter behavior, and ground-level insights to improve public engagement.",
            features: ["Micro-Voter Profiling", "Ground Insights", "Engagement Optimization"],
            img: "/images/backgrounds/impact_bg.png"
        },
        {
            id: "05",
            title: "Digital Advertising Campaigns",
            tag: "Massive Reach",
            description: "We run targeted digital campaigns to reach the right audience, increase visibility, and strengthen the impact of political and business campaigns.",
            features: ["Precision Ad Targeting", "Visibility Blitzes", "Impact Multipliers"],
            img: "/images/backgrounds/hero_bg.png"
        },
        {
            id: "06",
            title: "Content Creation & Political Messaging",
            tag: "Narrative Warfare",
            description: "Our team creates impactful content including campaign messages, videos, graphics, and speeches that clearly communicate the leader’s vision.",
            features: ["Speech Writing", "Cinematic Campaign Videos", "Graphic Storytelling"],
            img: "/images/backgrounds/about_bg.png"
        },
        {
            id: "07",
            title: "Business Digital Marketing",
            tag: "Corporate Growth",
            description: "Along with political strategy, we provide digital marketing services for businesses including branding, social media marketing, and lead generation.",
            features: ["Business Branding", "Lead Generation Systems", "Market Domination"],
            img: "/images/backgrounds/impact_bg.png"
        }
    ];

    return (
        <div className="services-page premium-grain">
            <section className="services-hero bg-white">
                <div className="container">
                    <div className="reveal active">
                        <span className="section-tag text-blue">Grow Rapidly Capabilities</span>
                        <h1 className="display-title">STRATEGIC <br /><span className="text-orange">POWER.</span></h1>
                        <p className="text-black opacity-70 max-600">
                            We deliver a comprehensive suite of tactical services designed for institutional leaders and innovative businesses.
                        </p>
                    </div>
                </div>
            </section>

            {servicesList.map((service, index) => (
                <section key={service.id} className={`service-detail ${index % 2 !== 0 ? 'bg-light' : 'bg-white'}`}>
                    <div className="container">
                        <div className="detail-split reveal">
                            <div className="detail-info">
                                <span className={`service-num ${index % 2 !== 0 ? 'text-green' : 'text-blue'}`}>{service.id}</span>
                                <span className="service-tag-small uppercase text-black">{service.tag}</span>
                                <h2 className="section-head text-black">{service.title}</h2>
                                <p className="opacity-70 service-desc-large text-black">{service.description}</p>
                                <ul className="feature-list">
                                    {service.features.map(f => (
                                        <li key={f}>
                                            <div className={`feature-line ${index % 2 !== 0 ? 'bg-green' : 'bg-blue'}`}></div>
                                            <span className="text-black">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="detail-visual">
                                <div className="detail-img-wrap">
                                    <img src={service.img} alt={service.title} className="gritty-img" />
                                    <div className="img-overlay-light-detail"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className="cta-banner bg-white premium-grain">
                <div className="container text-center">
                    <h2 className="display-title">READY TO ARCHITECT <br /><span className="text-green">VICTORY?</span></h2>
                    <div className="mt-50">
                        <a href="#contact" className="btn btn-black">INITIATE STRATEGY</a>
                    </div>
                </div>
            </section>

            <style>{`
                .services-page {
                    padding-top: var(--header-height);
                }

                .services-hero {
                    padding: 150px 0 100px;
                }

                .max-600 { max-width: 600px; font-size: 1.25rem; margin-top: 30px; }

                .service-detail {
                    padding: 140px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .detail-split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 100px;
                    align-items: center;
                }

                .service-num {
                    font-family: var(--font-heading);
                    font-size: 4rem;
                    font-weight: 900;
                    display: block;
                    line-height: 1;
                    margin-bottom: 20px;
                }

                .service-tag-small {
                    font-size: 0.875rem;
                    font-weight: 800;
                    letter-spacing: 0.2em;
                    margin-bottom: 1rem;
                    display: block;
                }

                .service-desc-large {
                    font-size: 1.25rem;
                    margin: 30px 0 40px;
                    line-height: 1.6;
                }

                .feature-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .feature-list li {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    font-weight: 800;
                    font-family: var(--font-heading);
                    text-transform: uppercase;
                    font-size: 0.95rem;
                }

                .feature-line {
                    width: 30px;
                    height: 2px;
                }

                .detail-img-wrap {
                    position: relative;
                    height: 500px;
                }

                .detail-img-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(1) brightness(1.1);
                }

                .img-overlay-light-detail {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(255,255,255,0.3), var(--white));
                    z-index: 2;
                }

                .cta-banner {
                    padding: 180px 0;
                    border-top: 1px solid rgba(0,0,0,0.1);
                }

                .text-center { text-align: center; }
                .mt-50 { margin-top: 50px; }

                @media (max-width: 1024px) {
                    .detail-split { grid-template-columns: 1fr; gap: 60px; }
                    .service-detail:nth-child(even) .detail-info { order: 1; }
                    .service-detail:nth-child(even) .detail-visual { order: 2; }
                }
            `}</style>
        </div>
    );
};

export default ServicesPage;
