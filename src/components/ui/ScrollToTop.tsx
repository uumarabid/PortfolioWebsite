import { ArrowUp } from "lucide-react"
import { useEffect, useState, type KeyboardEvent } from "react"

const SCROLL_THRESHOLD = 400

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    handleScrollToTop()
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
      onKeyDown={handleKeyDown}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-800 shadow-lg transition hover:border-teal-500/50 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-950 sm:bottom-8 sm:right-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  )
}
