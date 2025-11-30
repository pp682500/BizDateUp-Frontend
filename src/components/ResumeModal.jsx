export default function ResumeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-lg relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Upload Your Resume
        </h2>
        <p className="text-gray-600 text-center mb-6">
          We will match your resume with the best opportunities.
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Resume upload */}
          <div>
            <label className="text-gray-700 font-medium">Upload Resume</label>
            <input
              type="file"
              className="w-full mt-2"
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-semibold"
          >
            Submit Resume
          </button>
        </form>
      </div>
    </div>
  );
}
