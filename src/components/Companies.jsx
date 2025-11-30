export default function Companies() {
  const companies = [
    { name: "HackerRank", logo: "/company-icons/HR.png", url: "https://www.hackerrank.com/" },
    { name: "Airbnb", logo: "/company-icons/AB.png", url: "https://www.airbnb.com/" },
    { name: "GitLab", logo: "/company-icons/GL.png", url: "https://about.gitlab.com/" },
    { name: "Dropbox", logo: "/company-icons/DB.png", url: "https://www.dropbox.com/" },
    { name: "Upwork", logo: "/company-icons/UP.png", url: "https://www.upwork.com/" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {companies.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white shadow cursor-pointer"
          >
            <img src={c.logo} alt={c.name} className="w-6 h-6 object-contain" />
            <span className="text-gray-900 font-medium text-sm">{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
