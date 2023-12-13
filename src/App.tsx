import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Select from "./components/pages/Select";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/select" Component={Select} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
