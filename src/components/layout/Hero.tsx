import ResumeAnalyzerCard from "../upload/ResumeAnalyzerCard";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-20 text-center">
      {/* Badge */}
      <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        🚀 Free ATS Resume Optimizer
      </span>

      {/* Heading */}
      <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
        Match Your Resume
        <br />
        <span className="text-blue-600">to Any Job Description</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Upload your resume, paste a job description, and instantly receive an
        ATS match score, missing keywords, and AI-powered rewrite suggestions.
      </p>

      {/* Resume Analyzer */}
      <ResumeAnalyzerCard />
    </section>
  );
}