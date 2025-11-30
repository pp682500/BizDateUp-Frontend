export default function CompanyLogos() {
  const companies = [
    {
      name: "HackerRank",
      logo: "/company-icons/HR.png",
      url: "https://www.hackerrank.com/",
    },
    {
      name: "Airbnb",
      logo: "/company-icons/AB.png",
      url: "https://www.airbnb.com/",
    },
    {
      name: "GitLab",
      logo: "/company-icons/GL.png",
      url: "https://about.gitlab.com/",
    },
    {
      name: "Dropbox",
      logo: "/company-icons/DB.png",
      url: "https://www.dropbox.com/",
    },
    {
      name: "Upwork",
      logo: "/company-icons/UP.png",
      url: "https://www.upwork.com/",
    },
  ];

  return (
    <section className="w-full bg-yellow-50 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6">
        {companies.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white px-5 py-3 
                       rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-6 h-6 object-contain"
            />
            <span className="font-medium text-gray-700">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
