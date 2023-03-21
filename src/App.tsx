import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HowItWorks from "./pages/HowItWorks";
import ChefsOverview from "./pages/ChefsOverview";
import ChefDetail from "./pages/ChefDetail";
import MenuOverview from "./pages/MenuOverview";
import "./styles/main.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link to="/chefs">Chefs</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/chefs" element={<ChefsOverview />} />
        <Route path="/chefs/:id" element={<ChefDetail />} />
        <Route path="/menu" element={<MenuOverview />} />
        <Route path="*" element={<h1>404 Error page</h1>} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
