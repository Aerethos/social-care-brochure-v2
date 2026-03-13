import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold text-slate-900">
          Social Care Ireland Conference 2026
        </h1>
        <p className="text-2xl text-slate-600">Sponsor Brochure</p>
        
        <div className="flex gap-4 justify-center pt-8">
          <Link
            href="/brochure"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg"
          >
            Open Brochure
          </Link>
          
          
            href="/brochure.pdf"
            download
            className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-4 rounded-lg shadow-md border-2 border-slate-200"
          >
            Download PDF
          </a>
        </div>
      </div>
    </main>
  );
}
