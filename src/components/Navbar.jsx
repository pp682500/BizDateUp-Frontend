import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import UplersBrand from "./UplersBrand";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <UplersBrand size="w-24" textSize="text-2xl" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <button className="flex items-center gap-1">
            Page <FaChevronDown className="text-xs" />
          </button>

          <button className="flex items-center gap-1">
            For Companies <FaChevronDown className="text-xs" />
          </button>

          <button className="flex items-center gap-1">
            For Talent <FaChevronDown className="text-xs" />
          </button>

          <button>AI Recruitment</button>
          <button>Blogs</button>
          <button>Pricing</button>

          {/* *** NEW Dashboard & Edit links *** */}
          <Link to="/dashboard" className="text-indigo-600 font-semibold">
            Dashboard
          </Link>

          <Link to="/edit/1" className="text-indigo-600 font-semibold">
            Edit
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-3 font-medium">

          <button className="flex items-center gap-1 w-full">
            Page <FaChevronDown className="text-xs" />
          </button>

          <button className="flex items-center gap-1 w-full">
            For Companies <FaChevronDown className="text-xs" />
          </button>

          <button className="flex items-center gap-1 w-full">
            For Talent <FaChevronDown className="text-xs" />
          </button>

          <button className="w-full text-left">AI Recruitment</button>
          <button className="w-full text-left">Blogs</button>
          <button className="w-full text-left">Pricing</button>

          <Link to="/dashboard" className="block text-indigo-600">
            Dashboard
          </Link>

          <Link to="/edit/1" className="block text-indigo-600">
            Edit
          </Link>
        </div>
      )}
    </nav>
  );
}
