import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Select from "./components/pages/Select";
import AddData from "./components/pages/AddData";
import RemoveData from "./components/pages/RemoveData";
import Schedule from "./components/pages/Schedule";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/select" Component={Select} />
          <Route path="/addData" Component={AddData} />
          <Route path="/removeData" Component={RemoveData} />
          <Route path="/Schedule" Component={Schedule} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
