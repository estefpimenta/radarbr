import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Dashboard from "../../pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
