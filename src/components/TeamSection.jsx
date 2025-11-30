import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function TeamSection() {
  const team = [
    {
      name: "Reshma Babanani",
      title: "AD Account Management",
      desc: "Navigating the Complex Landscape of Building Tech Teams in India",
      img: "/team/reshma.png",
    },
    {
      name: "Bhuvan Desai",
      title: "VP of Tech Operations",
      desc: "AI in Hiring: How LLMs Enhance Candidate Screening and Quality",
      img: "/team/bhuvan.png",
    },
    {
      name: "Mehul Patel",
      title: "Head of Engineering",
      desc: "Transforming Talent Acquisition: A Deep Dive into AI-Powered Matchmaking",
      img: "/team/mehul.png",
    },
    {
      name: "Priyam Pandey",
      title: "Full Stack Developer",
      desc: "Experienced in translating complex business requirements into tech solutions.",
      img: "/team/priyam.png",
    },
  ];

  const [start, setStart] = useState(0);

  const next = () => {
    if (start < team.length - 3) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-10">
          Building Uplers Hiring Platform:{" "}
          <span className="text-gray-700">The AI Evolution</span>
        </h2>

        <div className="relative flex items-center">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-[-20px] bg-white shadow p-3 rounded-full z-10"
          >
            <FaChevronLeft />
          </button>

          {/* Horizontally sliding container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${start * 33.33}%)`,
              }}
            >
              {team.map((person, i) => (
                <div
                  key={i}
                  className="min-w-[33.33%] max-w-[33.33%] rounded-2xl overflow-hidden shadow-lg border"
                >
                  {/* Top Yellow Section */}
                  <div className="bg-[#FCD53F] p-6 flex justify-center">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-48 h-48 object-cover rounded-md"
                    />
                  </div>

                  {/* Bottom Content */}
                  <div className="bg-[#FFF4DB] p-6">
                    <h3 className="text-lg font-bold">{person.name}</h3>
                    <p className="text-sm text-gray-700">{person.title}</p>
                    <p className="text-gray-600 text-sm mt-3">{person.desc}</p>

                    <button className="mt-4 bg-[#FCD53F] px-4 py-1 text-sm font-medium rounded-full">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-[-20px] bg-white shadow p-3 rounded-full z-10"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}
