import { UploadCloud } from "lucide-react";

export default function UploadCard() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 transition-all hover:border-blue-500 hover:bg-blue-50">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-5 rounded-full bg-blue-100 p-5">
          <UploadCloud
            size={42}
            className="text-blue-600"
          />
        </div>

        <h3 className="text-xl font-semibold">
          Upload Your Resume
        </h3>

        <p className="mt-2 text-slate-500">
          Drag & Drop your PDF or DOCX
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Maximum file size: 5 MB
        </p>

        <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
          Choose File
        </button>
      </div>
    </div>
  );
}