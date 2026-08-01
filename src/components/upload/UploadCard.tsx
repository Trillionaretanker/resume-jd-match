import DropzoneArea from "./DropzoneArea";
import FilePreview from "./FilePreview";

import { useResumeUpload } from "@/hooks/useResumeUpload";

export default function UploadCard() {
  const {
    resume,
    setResume,
    clearResume,
  } = useResumeUpload();

  return (
    <>
      {resume ? (
        <FilePreview
          file={resume}
          onRemove={clearResume}
        />
      ) : (
        <DropzoneArea
          onFileSelect={(file) =>
            setResume({
              file,
              name: file.name,
              size: file.size,
              type: file.type,
            })
          }
        />
      )}
    </>
  );
}