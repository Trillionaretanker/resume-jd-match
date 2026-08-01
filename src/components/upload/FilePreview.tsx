import { FileText, Trash2 } from "lucide-react";

import { Button } from "@/shared/components/ui/Button";
import type { ResumeFile } from "@/types/resume";

interface FilePreviewProps {
  file: ResumeFile;
  onRemove: () => void;
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function FilePreview({
  file,
  onRemove,
}: FilePreviewProps) {
  return (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-green-100 p-3">
            <FileText className="text-green-700" size={28} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {file.name}
            </h3>

            <p className="text-sm text-slate-500">
              {formatFileSize(file.size)}
            </p>

            <p className="mt-1 text-sm font-medium text-green-700">
              ✓ Ready for analysis
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={onRemove}
        >
          <Trash2 size={18} />
        </Button>
      </div>
    </div>
  );
}