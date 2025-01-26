import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Features from "./pages/feature/Features";
import Supports from "./pages/support/Support";
import Download from "./pages/download/Download";
import Solution from "./pages/solution/Soultion";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/support" element={<Supports />} />
        <Route path="/download" element={<Download />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </div>
  );
};

export default App;
