import { useTheme } from "../../context/ThemeContext"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Theme: ${isDark ? "Dark" : "Light"}. Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className={`inline-flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950 ${className}`}
    >
      <span
        aria-hidden
        className={`flex h-7 w-12 items-center rounded-full border-2 p-0.5 transition-colors ${
          isDark
            ? "justify-end border-white bg-slate-950"
            : "justify-start border-slate-900 bg-white"
        }`}
      >
        <span
          className={`h-5 w-5 shrink-0 rounded-full ${
            isDark ? "bg-white" : "bg-slate-900"
          }`}
        />
      </span>
      <span
        className={`whitespace-nowrap text-sm font-medium ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        Theme: {isDark ? "Dark" : "Light"}
      </span>
    </button>
  )
}
