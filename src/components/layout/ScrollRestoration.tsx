import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const target = document.getElementById(id)
      if (target) {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
        })
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
