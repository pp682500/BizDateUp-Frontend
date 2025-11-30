import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import UplersBrand from "./UplersBrand";

export default function Footer() {
  return (
    <footer className="bg-[#FFF7D1] mt-20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-3">About</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>How it Works</li>
              <li>Why Uplers</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Blog</li>
              <li>Success Stories</li>
              <li>AI in Recruitment</li>
              <li>Knowledge Base</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-3">For Talents</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Find a Job</li>
              <li>Knowledge Base</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-3">Why Uplers?</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Our Talent Community</li>
              <li>- Mission Focused</li>
              <li>Untapped Talent Markets</li>
              <li>- Browse Talent</li>
            </ul>
          </div>

          {/* Footer Logo with UplersBrand */}
          <div className="flex flex-col items-start md:items-end">
            <UplersBrand size="w-28" textSize="text-2xl" />

            <div className="flex mt-4 gap-4 text-2xl text-gray-700">
              <FaLinkedin />
              <FaYoutube />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
