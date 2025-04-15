export const formatAuthors = (authors: string[][]): string =>
  authors.length > 0 ? authors.join(", ") : "Unknown Author";
