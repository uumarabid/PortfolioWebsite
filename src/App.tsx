import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { EmailDialogProvider } from "./context/EmailDialogContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <ThemeProvider>
    <EmailDialogProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EmailDialogProvider>
    </ThemeProvider>
  );
}
