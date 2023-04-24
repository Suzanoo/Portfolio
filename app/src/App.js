import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { Farewell } from "./pages/Farewell";

/** 
 * 
 * 
// Switch page
const App = () => {
  const [activeContent, setActiveContent] = useState("about");
  return (
    <>
      <div className="bg-lg bg-no-repeat bg-cover h-screen overflow-hidden font-aries">
        <Header />
        <Nav setActiveContent={setActiveContent} />
        {activeContent === "about" && <About />}
        {activeContent === "portfolio" && <Portfolio />}
      </div>
    </>
  );
};
*/

// Use Route
function App() {
  return (
    <>
      <Router>
        <div className="bg-lg bg-no-repeat bg-cover h-screen overflow-hidden font-aries">
          <Header />
          {<Nav />}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/postfolio" element={<Portfolio />} />
            <Route path="/farewell" element={<Farewell />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
