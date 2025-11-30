import React from "react";

export default function Steps() {
  const steps = [
    { n: "01", title: "Tell us what you need", desc: "Share your requirements." },
    { n: "02", title: "Meet the top talent", desc: "Shortlisted profiles." },
    { n: "03", title: "Interview & hire", desc: "Schedule interviews." },
    { n: "04", title: "Start working", desc: "Onboard quickly." },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h3 className="text-xl font-semibold mb-4">Hire in 4 Easy Steps</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map(s => (
          <div key={s.n} className="flex gap-4 items-start">
            <div className="text-2xl font-bold text-indigo-600">{s.n}</div>
            <div>
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm text-gray-600">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
