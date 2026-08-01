import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

import {
  ACCEPTED_FILE_TYPES,
  MAX_FILE_SIZE,
} from "../../lib/uploadConstants";

interface DropzoneAreaProps {
  onFileSelect: (file: File) => void;
}

export default function DropzoneArea({
  onFileSelect,
}: DropzoneAreaProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    multiple: false,
    maxSize: MAX_FILE_SIZE,
    accept: ACCEPTED_FILE_TYPES,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`rounded-2xl border-2 border-dashed p-10 transition-all cursor-pointer ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-slate-300 bg-slate-50 hover:border-blue-400"
      }`}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center text-center">
        <div className="mb-5 rounded-full bg-blue-100 p-5">
          <UploadCloud
            size={40}
            className="text-blue-600"
          />
        </div>

        <h3 className="text-xl font-semibold">
          Upload Your Resume
        </h3>

        <p className="mt-2 text-slate-500">
          Drag & Drop or Click to Browse
        </p>

        <p className="mt-1 text-sm text-slate-400">
          PDF or DOCX • Max 5 MB
        </p>
      </div>
    </div>
  );
}