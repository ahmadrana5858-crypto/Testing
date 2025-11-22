import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");

    // Detect active section while scrolling
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "work", "contact"];

            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const top = element.getBoundingClientRect().top;
                    if (top >= -200 && top <= 200) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="navbar-container">

            {/* ======= NAVBAR ======= */}
            <header className="navbar">
                <div className="nav-inner">
                    <h2 className="logo">Barber<span>X</span></h2>

                    <ul className="nav-links">
                        {["home", "about", "work", "contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    className={activeSection === item ? "active-link" : ""}
                                >
                                    {item === "home" ? "Home" :
                                     item === "about" ? "About Us" :
                                     item === "work" ? "Our Work" :
                                     "Contact Us"}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            {/* ======= HOME CARD ======= */}
            <main>
                <div id="home" className="card">
                    <h3>Classic Haircut</h3>
                    <p>Sharp, clean, and modern haircut style.</p>
                    <button className="card-btn">Book Now</button>
                </div>

                {/* ======= ABOUT US ======= */}
                <section id="about" className="about-us">
                    <h2>About Us</h2>
                    <p>
                        At BarberX, we deliver premium grooming with modern techniques and
                        classic styling. Our experienced barbers focus on sharp details,
                        clean fades, and personalized looks that enhance your personality.
                    </p>
                </section>

                {/* ======= WORK SECTION ======= */}
                <section id="work" className="work-section">
                    <h2>Our Work</h2>

                    <div className="work-section-images">
                        <img src="https://cdn.pixabay.com/photo/2023/12/01/14/34/haircut-8423833_1280.jpg" alt="Haircut" />
                        <img src="https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483" alt="Haircut" />
                        <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0" alt="Hair Salon" />
                        <img src="https://thumbs.dreamstime.com/b/close-up-happy-young-woman-hairdresser-washing-head-hair-salon-109270257.jpg" alt="Wash" />
                        <img src="https://lirp.cdn-website.com/e8bb2054/dms3rep/multi/opt/AdobeStock_239850786-640w.jpeg" alt="Salon" />
                        <img src="https://media.istockphoto.com/id/543698896/photo/hairdresser-cutting-woman-hair-in-shop.jpg?s=612x612&w=0&k=20&c=WLOkbKxQ-raj_kvsCQLs0LJUnaNFaLMOZOyZcQHlq6o=" alt="Kids Cut" />
                    </div>
                </section>

                {/* ======= CONTACT SECTION ======= */}
                <section id="contact" className="contact-section">
                    <h2>Contact Us</h2>

                    <div className="contact-box">
                        <div className="contact-info">
                            <h3>Get In Touch</h3>
                            <p>📍 BarberX Main Street, Lahore</p>
                            <p>📞 +92 300 1234567</p>
                            <p>📧 support@barberx.com</p>
                        </div>

                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </section>
            </main>

            {/* ======= FOOTER ======= */}
            <footer className="footer">
                <h2 className="footer-logo">Barber<span>X</span></h2>

                <p className="tagline">
                    Premium Grooming • Classic Cuts • Modern Style
                </p>

                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#work">Our Work</a>
                    <a href="#contact">Contact</a>
                </div>

                <p className="copyright">
                    © 2025 BarberX. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Navbar;
