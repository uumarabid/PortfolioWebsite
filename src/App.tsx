import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { EmailDialogProvider } from "./context/EmailDialogContext";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <EmailDialogProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EmailDialogProvider>
  );
}
