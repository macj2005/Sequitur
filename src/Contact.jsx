import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => formData.append(key, value));

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyE0XWkWWV01XqCM1SOif6aIyuBWsOeyIJe7GbzUu8UaHc3PMyBPTp_JkcQGnFI7fpl/exec", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setForm({ name: "", email: "", phone: "", business: "", description: "" });
                setShowSuccess(true);
                setTimeout(() => navigate("/"), 2500);
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            alert("Error submitting the form.");
        } finally {
            setLoading(false);
        }
    };

    // Load particles.js
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
        <div className="bg-[#f1f6f9] max-w-screen-xl mx-auto relative z-10">
            {/* Navigation */}
            <nav className="w-full flex flex-col md:flex-row md:justify-between md:items-center px-6 py-4 bg-gray-100 shadow-md fixed top-0 left-0 z-50">
                <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                    <img src="/images/logo-short.JPG" alt="Sequitur Logo" className="h-12 max-w-[300px] w-auto overflow-hidden" />
                </div>
                <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                    <Link to="/#home">
                        <button className="text-[#212a3e] hover:text-blue-600 font-medium">
                            Home
                        </button>
                    </Link>
                    <Link to="/#about">
                        <button className="text-[#212a3e] hover:text-blue-600 font-medium">
                            About
                        </button>
                    </Link>
                    <Link to="/#portfolio">
                        <button className="text-[#212a3e] hover:text-blue-600 font-medium">
                            Portfolio
                        </button>
                    </Link>
                    <Link to="/#contact">
                        <button className="text-[#212a3e] hover:text-blue-600 font-medium">
                            Contact Us
                        </button>
                    </Link>
                </div>

            </nav>

            {/* Hero Header with Particles */}
            <div className="relative h-[400px] pt-15 w-full overflow-hidden">
                <div id="particles-js" className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e57be] to-[#212A3E]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-white h-full text-center px-4">
                    <h2 className="text-5xl font-bold mb-6">Inquiry Form</h2>
                    <p className="text-lg max-w-3xl">
                        Please fill out this form and we will contact you as soon as possible.
                        We will reach out to you to speak about your project idea, scope, timeline, and pricing.
                    </p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-10 pt-10">
                {["name", "email", "phone", "business"].map((field, index) => (
                    <div className="px-4 sm:px-10" key={index}>
                        <label className="block mb-1 px-1 capitalize">{field}:</label>
                        <input
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                            required
                            className="w-full max-w-md p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-500"
                        />
                    </div>
                ))}
                <div className="px-4 sm:px-10">
                    <label className="block mb-1 px-1">Please describe your project:</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full max-w-md p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-500 resize-none"
                        placeholder="Describe what you need help with..."
                    />
                </div>
                <div className="py-10 bg-gradient-to-br from-[#1e57be] to-[#212A3E] w-full text-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-white text-[#1e57be] inline-flex font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300 cursor-pointer items-center justify-center gap-2 ${
                            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-100"
                        }`}
                    >
                        {loading && (
                            <svg className="animate-spin h-5 w-5 text-[#1e57be]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        )}
                        {loading ? "Sending..." : "Send Inquiry"}
                    </button>
                </div>
            </form>

            {/* Footer */}
            <footer className="bg-[#f1f6f9] py-6 text-center text-sm text-[#212a3e] w-full">
                <div className="flex justify-center">
                    <img src="/images/logo-short.JPG" alt="Sequitur Logo" className="h-12 w-auto" />
                    <p className="pt-3.25 pl-5">&copy; 2025 Sequitur LLC. All rights reserved.</p>
                </div>
            </footer>

            {showSuccess && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-[#1e57be] to-[#212A3E] bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl text-center w-80 animate-fadeIn">
                        <h2 className="text-xl font-semibold text-green-600 mb-2">Success!</h2>
                        <p className="text-gray-700">Your inquiry has been submitted.</p>
                        <p className="text-sm text-gray-500 mt-2">Redirecting to homepage...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
