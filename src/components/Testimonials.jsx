import React from "react";

export default function Testimonials() {
  const people = [
    { name: "Priya", text: "Great talent and fast process.", img: null },
    { name: "Rohan", text: "We hired within a week!", img: null },
    { name: "Meera", text: "Excellent candidates.", img: null },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h3 className="text-xl font-semibold mb-4">Building Uplers Hiring Platform</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {people.map(p => (
          <div key={p.name} className="bg-white p-4 rounded-2xl card-shadow">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-lg bg-yellow-300 flex items-center justify-center font-semibold text-gray-800">{p.name.charAt(0)}</div>
              <div>
                <div className="font-semibold">{p.name}</div>
                <p className="text-sm text-gray-600">{p.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
