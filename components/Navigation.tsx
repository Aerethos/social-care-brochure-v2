'use client';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation = ({ currentPage, totalPages, onPrevious, onNext }: NavigationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={onPrevious}
            disabled={isFirstPage}
            className={`px-6 py-3 rounded-lg font-medium ${
              isFirstPage
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            ← Previous
          </button>

          <div className="text-center">
            <div className="text-base font-semibold text-slate-900">
              Page {currentPage} / {totalPages}
            </div>
            <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-blue-600 transition-all"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              />
            </div>
          </div>

          <button
            onClick={onNext}
            disabled={isLastPage}
            className={`px-6 py-3 rounded-lg font-medium ${
              isLastPage
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
