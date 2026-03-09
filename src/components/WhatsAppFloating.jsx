import React from 'react';

const WhatsAppFloating = () => {
    return (
        <a
            href="https://wa.me/919270010816"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
        >
            <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.969c0 2.112.551 4.176 1.596 6.033L0 24l6.15-.162c1.794.978 3.812 1.493 5.86 1.494h.005c6.598 0 11.963-5.362 11.965-11.97 0-3.202-1.246-6.212-3.506-8.472z" />
            </svg>
            <style>{`
                .whatsapp-float {
                    position: fixed;
                    bottom: 40px;
                    right: 40px;
                    background-color: var(--primary);
                    color: white;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 25px rgba(118, 184, 40, 0.3);
                    z-index: 1000;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    text-decoration: none;
                }
                .whatsapp-float:hover {
                    transform: scale(1.1) translateY(-5px);
                    box-shadow: 0 15px 30px rgba(118, 184, 40, 0.4);
                    background-color: var(--primary-dark);
                }
                .whatsapp-float::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: var(--primary);
                    opacity: 0.3;
                    z-index: -1;
                    animation: pulse-whatsapp 2s infinite;
                }
                @keyframes pulse-whatsapp {
                    0% { transform: scale(1); opacity: 0.3; }
                    70% { transform: scale(1.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 0; }
                }
                @media (max-width: 768px) {
                    .whatsapp-float {
                        bottom: 20px;
                        right: 20px;
                        width: 50px;
                        height: 50px;
                    }
                }
            `}</style>
        </a>
    );
};

export default WhatsAppFloating;
