import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  const handleFindJob = () => setOpenModal(true);
  const handleDropResume = () => setOpenModal(true);

  return (
    <section className="bg-[#FFF7D1] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          Hire Top Talents quickly <br />
          with AI & Human Intelligence
        </h1>

        <p className="text-gray-700 max-w-xl mt-4">
          Uplers is an end-to-end AI-hiring platform for tech companies to hire top
          engineering & marketing talents from India.
        </p>

        {/* SEARCH BOX + BUTTONS */}
        <div className="mt-8 bg-white p-4 rounded-full shadow flex items-center gap-4 max-w-3xl">
          
          {/* Location Dropdown */}
          <select className="border rounded-full px-3 py-2 outline-none">
            <option>Location</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>

          {/* Search Input */}
          <div className="flex items-center flex-1 bg-gray-100 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Keywords / Job title / Company"
              className="bg-transparent outline-none flex-1"
            />
          </div>

          {/* Find a Job Button */}
          <button
            onClick={handleFindJob}
            className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
          >
            Find a Job
          </button>

          {/* Drop Resume Button */}
          <button
            onClick={handleDropResume}
            className="bg-white border px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
          >
            Drop Resume
          </button>
        </div>

        {/* SUB-TEXT */}
        <p className="mt-4 text-gray-600">
          Find, hire & manage your offshore team seamlessly.
        </p>
      </div>

      {/* MODAL */}
      <ResumeModal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
}
