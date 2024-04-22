import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import AllTask from "./pages/AllTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Navbar1 from "./component/Navbar1";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<AllTask />} />
            <Route path="/new" element={<NewTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
