import React from "react";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <h1 className="texet-5xl md:text-6xl font-bold mb-4">Follow through with Sequitur</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">Building you an online presence.</p>
                <a
                    href="#contact"
                    className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-2xl shadow-md transtiion duration-300"
                >
                    Contact Us
                </a>
            </section>
        </main>
    );
}