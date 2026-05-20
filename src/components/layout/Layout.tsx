import { Outlet } from "react-router-dom";
import { EmailContactDialog } from "../contact/EmailContactDialog";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal-500 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <EmailContactDialog />
    </div>
  );
}
