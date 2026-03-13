'use client';
import { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import Header from './Header';
import Navigation from './Navigation';
import { BROCHURE_CONFIG, getPageImagePath } from '@/lib/constants';

const BrochureViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const goToNextPage = useCallback(() => {
    if (currentPage < BROCHURE_CONFIG.totalPages) {
      setCurrentPage(prev => prev + 1);
      setIsImageLoaded(false);
    }
  }, [currentPage]);

  const goToPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      setIsImageLoaded(false);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNextPage();
      if (e.key === 'ArrowLeft') goToPreviousPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPreviousPage]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextPage,
    onSwipedRight: goToPreviousPage,
    trackTouch: true,
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-8 pb-32" {...swipeHandlers}>
        <div className="w-full h-full max-w-5xl">
          <div className={`relative w-full h-full max-h-[calc(100vh-14rem)] bg-white rounded-lg shadow-2xl overflow-hidden transition-opacity ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-slate-600">Loading page {currentPage}...</p>
                </div>
              </div>
            )}
            
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <img
                src={getPageImagePath(currentPage)}
                alt={`Page ${currentPage}`}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </main>

      <Navigation
        currentPage={currentPage}
        totalPages={BROCHURE_CONFIG.totalPages}
        onPrevious={goToPreviousPage}
        onNext={goToNextPage}
      />
    </div>
  );
};

export default BrochureViewer;
```

---

## PART 2: Organize Your Folder Structure

Your folder should look EXACTLY like this:
```
social-care-brochure/
├── .gitignore
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── brochure/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Navigation.tsx
│   └── BrochureViewer.tsx
├── lib/
│   └── constants.ts
└── public/
    ├── pages/
    │   ├── page-1.jpg
    │   ├── page-2.jpg
    │   └── ... (your images)
    └── brochure.pdf
