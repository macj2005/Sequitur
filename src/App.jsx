import { useState } from 'react'
import './App.css'
import HomePage from "./HomePage";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/next';

function App() {
  return (
    <Router>
      <Routes>
        <Analytics />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
