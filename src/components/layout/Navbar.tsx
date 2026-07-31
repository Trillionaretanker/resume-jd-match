export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            R
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              ResumeMatch
            </h1>
            <p className="text-xs text-gray-500">
              ATS Resume Optimizer
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition-all duration-200 hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </header>
  );
}