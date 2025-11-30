import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import Companies from "../components/Companies";
import TeamSection from "../components/TeamSection";
import StepsSection from "../components/StepsSection";

import { createSubmission } from "../services/api";
import CompanyLogos from "../components/CompanyLogos";

<CompanyLogos />


export default function Landing() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    role: "",
    expertise: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      await createSubmission(form);

      alert("Submission successful!");
      setLoading(false);

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        experience: "",
        role: "",
        expertise: "",
        notes: "",
      });

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      console.error("Error submitting:", err);
      alert("Submission failed");
    }
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <Hero />

      {/* TRUSTED COMPANIES */}
      <Companies />

      {/* TEAM CAROUSEL */}
      <TeamSection />

      {/* 4 STEPS SECTION */}
      <StepsSection />

      {/* HIRE TALENT FORM SECTION */}
      <section className="bg-yellow-400 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Hire Talent from India Without Compromise
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* INPUTS */}
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="p-3 border rounded-lg"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              required
              className="p-3 border rounded-lg"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="p-3 border rounded-lg"
            />

            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
              placeholder="Experience (years)"
              className="p-3 border rounded-lg"
            />

            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Role"
              className="p-3 border rounded-lg"
            />

            <input
              name="expertise"
              value={form.expertise}
              onChange={handleChange}
              placeholder="Expertise"
              className="p-3 border rounded-lg"
            />

            {/* NOTES */}
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Write any additional notes"
              className="col-span-1 md:col-span-2 p-3 border rounded-lg h-28"
            />

            {/* BUTTONS */}
            <div className="col-span-1 md:col-span-2 flex gap-4 mt-4">

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={() =>
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    experience: "",
                    role: "",
                    expertise: "",
                    notes: "",
                  })
                }
                className="px-6 py-3 border rounded-lg bg-white text-gray-700"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
