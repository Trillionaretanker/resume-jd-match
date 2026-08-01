export type AnalysisStatus =
  | "idle"
  | "uploading"
  | "parsing"
  | "ready"
  | "analyzing"
  | "completed"
  | "error";

export interface ResumeFile {
  file: File;
  name: string;
  size: number;
  type: string;
}

export interface AnalysisResult {
  matchScore: number | null;
}

export interface ResumeAnalysisState {
  resume: ResumeFile | null;

  resumeText: string;

  jobDescription: string;

  status: AnalysisStatus;

  analysis: AnalysisResult;

  error: string | null;
}