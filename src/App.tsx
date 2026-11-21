import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OpeningPage from "./pages/OpeningPage";
import PracticePage from "./pages/PracticePage";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <Router>
      <div className={`min-h-svh bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opening/:id" element={<OpeningPage />} />
          <Route path="/practice/:id" element={<PracticePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;