export interface UploadError {
  message: string;
}

export interface UploadedResume {
  file: File;
  name: string;
  size: number;
  type: string;
}