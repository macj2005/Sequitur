import React from "react";

export default function HomePage() {
    return (
        <>

        <div className="fixed top-0 left-0 h-full w-full bg-[url('images/background.jpg')] bg-repeat scroll-bg-x z-0"></div>

        <div className="min-h-screen relative z-10">
            <main className="min-h-screen text-gray-900">
                <div className="bg-[#f1f6f9] max-w-screen-xl mx-auto">
                    {/* Hotbar */}
                    <nav className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md fixed top-0 left-0 z-50">
                        <div className="flex space-x-12">
                            <a href="#home" className="text-[#212a3e] hover:text-blue-600 font-medium">Home</a>
                            <a href="#about" className="text-[#212a3e] hover:text-blue-600 font-medium">About</a>
                            <a href="#portfolio" className="text-[#212a3e] hover:text-blue-600 font-medium">Portfolio</a>
                            <a href="#contact" className="text-[#212a3e] hover:text-blue-600 font-medium">Contact Us</a>
                        </div>
                        <div className="text-blue-600">
                            <img src="images/logo-short.jpg" alt="Sequitur Logo" className="h-12 w-auto" />
                        </div>
                    </nav>

                    {/* Hero Section */}
                    <section id="home" className="flex flex-col items-center justify-center text-center px-4 py-40 bg-gradient-to-br from-[#1e57be] to-[#212A3E] text-white">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Follow through with Sequitur</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl">Bringing you an online presence for an affordable price.</p>
                        <a href="#contact" className="bg-white text-[#212a3e] hover:bg-blue-100 font-semibold py-3 px-6 rounded-2xl shadow-md transtiion duration-300">
                            Contact Us
                        </a>
                    </section>

                    {/* About Section */}
                    <section id="about" className="px-6 py-20 max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-[#212a3e]">About Us</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Located in the DFW area, we are a young freelance web developer duo that help businesses and creators grow a compelling online presence. We build modern, responsive, and optimized websites so your customers can reach you.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700 mt-4">
                            Our goal is to provide a gateway for our clients to grow an online presence, even if they are not technologically inclined. Whether you are a well-established tech company, or a community-driven local restaurant, we will work hard to cater towards your individual online needs.
                        </p>

                        <div className="mt-12 grid md:grid-cols-2 gap-10">
                            <div className="text-center">
                                <img src="" alt="Mac image" className="mx-auto mb-4 w-40 h-40 object-cover rounded-full shadow-md" />
                                <h3 className="text-xl font-semibold text-[#212a3e]">Mac Johnson</h3>
                                <p className="text-sm text-gray-500">Co-Founder & Lead Developer</p>
                                <p className="text-sm text-gray-600 mt-2">
                                    Studying Computer Science & Mathematics at Baylor University - uses his technical knowledge to build websites from the ground up, ensuring optimized code and an easy transition process for finished products.
                                </p>
                            </div>
                            <div className="text-center">
                                <img src="" alt="Daniel image" className="mx-auto mb-4 w-40 h-40 object-cover rounded-full shadow-md" />
                                <h3 className="text-xl font-semibold text-[#212a3e]">Wayne Six</h3>
                                <p className="text-sm text-gray-500">Co-Founder & Management Lead</p>
                                <p className="text-sm text-gray-600 mt-2">
                                    Studying Finance & Sales at Baylor University - uses his management expertise to guarentee client satisfaction and clear communication between us and our clients.
                                </p>
                            </div>
                        </div>

                    </section>

                    {/* Portfolio Section */}
                    <section id="portfolio" className="px-6 py-20 bg-gray-50">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6 text-[#212a3e]">Our Work</h2>
                            <p className="text-lg text-gray-700 mb-12">
                                Here are some recent projects that reflect the quality of our work:
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white shadow-md rounded-xl overflow-hidden">
                                    <img src="/project1.jpg" alt="Project 1" className="w-full h-40 object-cover" />
                                    <div className="p-4 text-left">
                                        <h3 className="text-lg font-semibold text-[#212a3e]">Project One</h3>
                                        <p className="text-sm text-gray-600">Description...</p>
                                    </div>
                                </div>

                                <div className="bg-white shadow-md rounded-xl overflow-hidden">
                                    <img src="/project2.jpg" alt="Project 2" className="w-full h-40 object-cover" />
                                    <div className="p-4 text-left">
                                        <h3 className="text-lg font-semibold text-[#212a3e]">Project Two</h3>
                                        <p className="text-sm text-gray-600">Description...</p>
                                    </div>
                                </div>

                                <div className="bg-white shadow-md rounded-xl overflow-hidden">
                                    <img src="/project3.jpg" alt="Project 3" className="w-full h-40 object-cover" />
                                    <div className="p-4 text-left">
                                        <h3 className="text-lg font-semibold text-[#212a3e]">Project Three</h3>
                                        <p className="text-sm text-gray-600">Description...</p>
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
                        <button
                        className="bg-white text-[#1e57be] hover:bg-blue-100 font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300"
                        onClick={() => {}}
                        >
                        Contact Us
                        </button>
                    </section>

                    {/* Footer */}
                    <footer className="bg-[#f1f6f9] py-6 text-center text-sm text-[#212a3e]">
                        <p>&copy; 2025 Sequitur LLC. All rights reserved.</p>
                    </footer>
                </div>
            </main>
        </div>
        </>
    );
}