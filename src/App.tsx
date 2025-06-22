import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app/router.tsx";
import { TabBar } from "./app/components/tab-bar.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <TabBar />
      <main className="p-4">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}
