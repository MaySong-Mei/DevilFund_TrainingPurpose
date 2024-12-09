import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TestPage from "@/pages/TestPage";

function App() {
  return (
    <Router future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<TestPage />}/>
        <Route path="/projects" element={<TestPage />}/>
        <Route path="/jobs" />
        <Route path="/tractions" />
      </Routes>
    </Router>
  );
}

export default App;
