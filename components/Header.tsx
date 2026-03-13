'use client';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-slate-600 hover:text-blue-600">
            ← Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-xl font-bold text-slate-900">
              Social Care Ireland Conference 2026
            </h1>
            <p className="text-sm text-slate-600">Sponsor Brochure</p>
          </div>
          
          
            href="/brochure.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
