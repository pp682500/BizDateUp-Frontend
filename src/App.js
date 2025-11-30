// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
