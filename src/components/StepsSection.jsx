import { FaUserCheck, FaUsers, FaClipboardCheck, FaRocket } from "react-icons/fa";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you need",
      desc: "We'll get in touch with you to understand your requirements and preferences.",
      icon: <FaUserCheck className="text-3xl text-yellow-500" />,
      btn: "Define",
    },
    {
      number: "02",
      title: "Meet the top talent",
      desc: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours.",
      icon: <FaUsers className="text-3xl text-yellow-500" />,
      btn: "Discover",
    },
    {
      number: "03",
      title: "Meet the top talent",
      desc: "Get 3 to 5 pre-vetted candidates in 48 hours.",
      icon: <FaClipboardCheck className="text-3xl text-yellow-500" />,
      btn: "Evaluate",
    },
    {
      number: "04",
      title: "Meet the top talent",
      desc: "Get 3 to 5 pre-vetted candidates in 48 hours.",
      icon: <FaRocket className="text-3xl text-yellow-500" />,
      btn: "Onboard",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-10">
          Hire in <span className="text-purple-700">4 Easy Steps</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Numbers */}
          <div className="space-y-10">
            {steps.map((s) => (
              <h3 key={s.number} className="text-3xl font-extrabold text-gray-900">
                {s.number}
              </h3>
            ))}
          </div>

          {/* Right Steps */}
          <div className="space-y-10">
            {steps.map((s) => (
              <div key={s.number} className="flex gap-4">
                <div className="p-4 rounded-full bg-yellow-200">{s.icon}</div>

                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                  <button className="border px-4 py-1 rounded-full mt-3 bg-white shadow-sm hover:bg-gray-100">
                    {s.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
