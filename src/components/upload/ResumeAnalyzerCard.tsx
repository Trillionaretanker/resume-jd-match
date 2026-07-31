import { Card } from "../ui/Card";
import UploadCard from "./UploadCard";

export default function ResumeAnalyzerCard() {
  return (
    <Card
      className="mt-14 w-full max-w-4xl"
      variant="default"
      padding="lg"
    >
      <h2 className="text-2xl font-semibold text-gray-900">
        Resume Analysis
      </h2>

      <p className="mt-2 text-gray-500">
        Upload your resume and paste a job description to get your ATS match score.
      </p>

      <div className="mt-8">
        <UploadCard />
      </div>
    </Card>
  );
}