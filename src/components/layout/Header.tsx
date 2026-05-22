import { Mail, Menu, X } from "lucide-react";
import { GitHubIcon } from "../ui/GitHubIcon";
import { LinkedInIcon } from "../ui/LinkedInIcon";
import { useState } from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import { useEmailDialog } from "../../context/EmailDialogContext";
import { profile } from "../../data/profile";
import { sectionHash } from "../../lib/paths";
import { Button } from "../ui/Button";

const homeNavItems = [
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Experience", sectionId: "experience" },
  { label: "Projects", sectionId: "projects" },
  { label: "Education", sectionId: "education" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenedOnPath, setMenuOpenedOnPath] = useState("");
  const location = useLocation();
  const { openEmailDialog } = useEmailDialog();
  const isHome = useMatch({ path: "/", end: true }) != null;
  const isMenuOpen = menuOpen && menuOpenedOnPath === location.pathname;

  const handleToggleMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
      return;
    }
    setMenuOpenedOnPath(location.pathname);
    setMenuOpen(true);
  };

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-lg font-semibold text-slate-900 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-white dark:hover:text-teal-400"
          aria-label={`${profile.name} home`}
        >
          <img
            src={profile.avatarSrc}
            alt=""
            aria-hidden
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
            width={36}
            height={36}
          />
          {profile.name.split(" ").slice(-2).join(" ")}
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {isHome &&
            homeNavItems.map((item) => (
              <a
                key={item.sectionId}
                href={sectionHash(item.sectionId)}
                className="text-sm text-slate-600 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-300 dark:hover:text-teal-400"
              >
                {item.label}
              </a>
            ))}
          <Link
            to="/contact"
            className={`text-sm transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:hover:text-teal-400 ${
              location.pathname === "/contact"
                ? "text-teal-500 dark:text-teal-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Contact
          </Link>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-slate-600 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-300 dark:hover:text-teal-400"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          {profile.contact.linkedin ? (
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-600 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-300 dark:hover:text-teal-400"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          ) : null}
          <Button
            variant="secondary"
            className="!py-2"
            onClick={openEmailDialog}
          >
            <Mail className="h-4 w-4" aria-hidden />
            Email
          </Button>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200 px-4 py-4 md:hidden dark:border-slate-800"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-3">
            {isHome &&
              homeNavItems.map((item) => (
                <li key={item.sectionId}>
                  <a
                    href={sectionHash(item.sectionId)}
                    className="block text-slate-600 hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-400"
                    onClick={handleCloseMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            <li>
              <Link
                to="/contact"
                className="block text-slate-600 hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-400"
                onClick={handleCloseMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="text-left text-slate-600 hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-400"
                onClick={() => {
                  openEmailDialog();
                  handleCloseMenu();
                }}
              >
                Contact via email
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
