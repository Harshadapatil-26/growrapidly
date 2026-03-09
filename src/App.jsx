import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Team from './components/Team';
import Services from './components/Services';
import Strategy from './components/Strategy';
import WhyChooseUs from './components/WhyChooseUs';
import Impact from './components/Impact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import ServicesPage from './pages/ServicesPage';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const ScrollReveal = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [location]);

    return children;
};

const HomePage = () => (
    <>
        <div id="home"><Hero /></div>
        <div id="services"><Services /></div>
        <div id="leadership"><Leadership /></div>
        <div id="why-us"><WhyChooseUs /></div>
        <div id="contact"><CTA /></div>
    </>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <ScrollReveal>
                <div className="app">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                    </Routes>
                    <Footer />
                    <WhatsAppFloating />
                </div>
            </ScrollReveal>
        </Router>
    );
}

export default App;
