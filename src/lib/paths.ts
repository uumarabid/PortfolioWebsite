/** Prefix a public asset path with the Vite base URL (e.g. /PortfolioWebsite/). */
export const withBase = (path: string) => {
  const segment = path.startsWith("/") ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${segment}`
}

/** In-page section link; must be relative (#id), not /#id, for GitHub Pages. */
export const sectionHash = (sectionId: string) => `#${sectionId}`
