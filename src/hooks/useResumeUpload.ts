import { useState } from "react";
import type { UploadedResume, UploadError } from "../types/upload";
export function useResumeUpload() {
  const [resume, setResume] = useState<UploadedResume | null>(null);
  const [error, setError] = useState<UploadError | null>(null);

  const clearResume = () => {
    setResume(null);
    setError(null);
  };

  return {
    resume,
    setResume,
    error,
    setError,
    clearResume,
  };
}