import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./Pages/Landing/Landing";
import { Projects } from "./Pages/Projects/Projects";
import ProjecsData from "./data/projects.json";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects/:id" element={<Projects projectsData={ProjecsData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
