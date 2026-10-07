import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import {
  Home,
  About,
  Contact,
  Services,
  Cart,
  Checkout,
} from "./assets/components/pages";

import Navbar from "./assets/components/navbar";
import Footer from "./assets/components/Footer";
import Agent from "./assets/components/pages/agent";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/agent/:name" element={<Agent />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;