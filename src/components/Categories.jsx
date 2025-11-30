import React from "react";
import { BriefcaseIcon, CodeBracketIcon, PaintBrushIcon, ServerIcon } from '@heroicons/react/24/outline';

const ICONS = {
  briefcase: <BriefcaseIcon className="w-6 h-6" />,
  code: <CodeBracketIcon className="w-6 h-6" />,
  paint: <PaintBrushIcon className="w-6 h-6" />,
  server: <ServerIcon className="w-6 h-6" />,
};

export default function Categories() {
  const cats = [
    { title: "Frontend", icon: ICONS.code },
    { title: "Backend", icon: ICONS.server },
    { title: "Fullstack", icon: ICONS.briefcase },
    { title: "UI/UX", icon: ICONS.paint },
    { title: "Data Science", icon: ICONS.briefcase },
    { title: "DevOps", icon: ICONS.server },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Browse by category</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {cats.map(c => (
          <div key={c.title} className="bg-white p-4 rounded-lg card-shadow text-center">
            <div className="flex items-center justify-center mb-2 text-indigo-600">{c.icon}</div>
            <div className="text-sm font-medium">{c.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
