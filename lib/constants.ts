export const BROCHURE_CONFIG = {
  totalPages: 60,
  title: "Social Care Ireland Conference 2026",
  subtitle: "Sponsor Brochure",
  pdfPath: "/brochure.pdf",
  pagesPath: "/pages",
};

export const getPageImagePath = (pageNumber: number): string => {
  return `${BROCHURE_CONFIG.pagesPath}/page-${pageNumber}.jpg`;
};

export const isValidPage = (pageNumber: number): boolean => {
  return pageNumber >= 1 && pageNumber <= BROCHURE_CONFIG.totalPages;
};
