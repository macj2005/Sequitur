import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("business", form.business);
        formData.append("description", form.description);

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyE0XWkWWV01XqCM1SOif6aIyuBWsOeyIJe7GbzUu8UaHc3PMyBPTp_JkcQGnFI7fpl/exec", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    business: "",
                    description: "",
                });
                setShowSuccess(true);

                setTimeout(() => {
                    navigate("/");
                }, 2000);
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

    return (
        <>

        {/* Animated BG */}
        <div className="fixed top-0 left-0 h-full w-full bg-[url('/images/background.jpg')] bg-repeat scroll-bg-x z-0"></div>

        <div className="bg-[#f1f6f9] max-w-screen-xl mx-auto relative z-10">
            {/* Hotbar */}
            <nav className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md fixed top-0 left-0 z-50">
                <Link to="/">
                    <button className="text-[#212a3e] hover:text-blue-600 font-medium cursor-pointer">Home</button>
                </Link>
                <div className="text-blue-600">
                    <img src="/images/logo-short.JPG" alt="Sequitur Logo" className="h-12 w-auto" />
                </div>
            </nav>

            { /* Header */}
            <div className="justify-center py-20 text-white bg-gradient-to-br from-[#1e57be] to-[#212A3E]">
                <h2 className="text-5xl py-10 font-bold">Inquiry Form</h2>
                <p className="text-lg px-20">Please fill out this form and we will contact you as soon as possible. We will reach out to you to speak about your project idea, scope, timeline, and pricing.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-10 pt-10 justify-items-start">
                <div className="px-10">
                    <label className="px-4">Full Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="mt-1 w-lg p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-500"
                    />
                </div>
                <div className="px-10">
                    <label className="px-4">Email Address:</label>
                    <input 
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="mt-1 w-lg p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-500"
                    />
                </div>
                <div className="px-10">
                    <label className="px-4">Phone Number:</label>
                    <input 
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="mt-1 w-lg p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-500"
                    />
                </div>
                <div className="px-10">
                    <label className="px-4">What type of business are you promoting?</label>
                    <input 
                        type="text"
                        name="business"
                        value={form.business}
                        onChange={handleChange}
                        required
                        className="mt-1 w-lg p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-500"
                    />
                </div>
                <div className="px-10">
                    <label className="px-4">Please describe your project:</label>
                    <input 
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        className="mt-1 w-lg p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-500"
                    />
                </div>
                <div className="py-10 bg-gradient-to-br from-[#1e57be] to-[#212A3E] w-full">
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
            <footer className="bg-[#f1f6f9] py-6 text-center text-sm text-[#212a3e] bottom-0 left-0 w-full z-50">
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
        </>

    );
}