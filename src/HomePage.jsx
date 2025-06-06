import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    useEffect(() => {
        const loadParticles = () => {
            if (window.particlesJS) {
                window.particlesJS("particles-js", {
                    particles: {
                        number: { value: 80, density: { enable: true, value_area: 800 } },
                        color: { value: "#888888" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5 },
                        size: { value: 3 },
                        move: { enable: true, speed: 2 }
                    },
                    interactivity: {
                        events: { onhover: { enable: true, mode: "repulse" } },
                        modes: { repulse: { distance: 100 } }
                    },
                    retina_detect: true
                });
            } else {
                setTimeout(loadParticles, 100);
            }
        };

        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
        script.onload = loadParticles;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="min-h-screen w-full text-gray-900 bg-gradient-to-br from-[#1e57be] to-[#212A3E]">
            {/* Navigation */}
            <nav className="w-full flex flex-col md:flex-row md:justify-between md:items-center px-6 py-4 bg-gray-100 shadow-md fixed top-0 left-0 z-50">
                <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                    <img src="/images/logo-short.JPG" alt="Sequitur Logo" className="h-12 max-w-[300px] w-auto overflow-hidden" />
                </div>
                <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                    <a href="#home" className="text-[#212a3e] hover:text-blue-600 font-medium">Home</a>
                    <a href="#about" className="text-[#212a3e] hover:text-blue-600 font-medium">About</a>
                    <a href="#portfolio" className="text-[#212a3e] hover:text-blue-600 font-medium">Portfolio</a>
                    <a href="#contact" className="text-[#212a3e] hover:text-blue-600 font-medium">Contact Us</a>
                </div>

            </nav>

            {/* Hero Section */}
            <section id="home" className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 z-0" id="particles-js"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-gray-100 bg-transparent">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Follow through with Sequitur</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl">Building you an online presence for an affordable price.</p>
                    <Link to="/contact">
                        <button className="bg-[#212a3e] text-white hover:bg-[#1e57be] font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300 cursor-pointer">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="w-full px-6 py-20 text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">About Us</h2>
                <p className="text-lg lg:px-50 leading-relaxed text-gray-200">
                    Located in the DFW area, we are a young freelance web developer duo that help businesses and creators grow a compelling online presence. We build modern, responsive, and optimized websites so your customers can reach you.
                </p>
                <p className="text-lg lg:px-50 leading-relaxed text-gray-200 mt-4">
                    Our goal is to provide a gateway for our clients to grow an online presence, even if they are not technologically inclined. Whether you are a well-established tech company, or a community-driven local restaurant, we will work hard to cater towards your individual online needs.
                </p>

                <div className="mt-12 grid md:grid-cols-2 gap-10">
                    <div className="text-center">
                        <img src="/images/mac.jpg" alt="Mac image" className="mx-auto mb-4 w-40 h-40 object-cover rounded-full shadow-md" />
                        <h3 className="text-xl font-semibold text-gray-200">Mac Johnson</h3>
                        <p className="text-sm text-gray-500">Co-Founder & Lead Developer</p>
                        <p className="text-sm lg:px-50 text-gray-200 mt-2">
                            Studying Computer Science & Mathematics at Baylor University - uses his technical knowledge to build websites from the ground up, ensuring optimized code and an easy transition process for finished products.
                        </p>
                    </div>
                    <div className="text-center">
                        <img src="/images/daniel.JPG" alt="Daniel image" className="mx-auto mb-4 w-40 h-40 object-cover rounded-full shadow-md" />
                        <h3 className="text-xl font-semibold text-gray-200">Wayne Six</h3>
                        <p className="text-sm text-gray-500">Co-Founder & Management Lead</p>
                        <p className="text-sm lg:px-50 text-gray-200 mt-2">
                            Studying Finance & Sales at Baylor University - uses his management expertise to guarantee client satisfaction and clear communication between us and our clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="px-6 py-20 lg:px-25 bg-[#f1f6f9]">
                <div className="w-full text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#212a3e]">Our Work</h2>
                    <p className="text-lg text-gray-700 mb-12">
                        Here are some recent projects that reflect the quality of our work:
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-xl overflow-hidden ">
                            <img src="/images/burdines.png" alt="Project 1" className="w-full h-40 object-cover" />
                            <div className="p-4 text-left">
                                <h3 className="text-lg font-semibold text-[#212a3e]">Burdine's Waterfront</h3>
                                <p className="text-sm text-gray-600">A responsive website for a beloved family-owned restaurant - highlighting marina services and menu items using our responsive menu display system.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-6 py-20 text-center bg-gradient-to-br from-[#1e57be] to-[#212A3E] text-white">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Interested in working together or have questions? Click the button below to get started.
                </p>
                <Link to="/contact">
                    <button className="bg-white text-[#1e57be] hover:bg-blue-100 font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300 cursor-pointer">
                        Contact Us
                    </button>
                </Link>
            </section>

            {/* Footer */}
            <footer className="bg-[#f1f6f9] py-6 text-center text-sm text-[#212a3e] bottom-0 left-0 w-full z-50">
                <div className="flex justify-center">
                    <img src="/images/logo-short.JPG" alt="Sequitur Logo" className="h-12 w-auto" />
                    <p className="pt-3.25 pl-5">&copy; 2025 Sequitur LLC. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
