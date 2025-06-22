import { HomePage } from "./routes/home-page.tsx";
import { MonthPage } from "./routes/month-page.tsx";
import { SettingsPage } from "./routes/settings-page.tsx";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/month" element={<MonthPage />} />
    <Route path="/settings" element={<SettingsPage />} />
  </Routes>
);