import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./components/mainContent";
import Navigation from "./components/navigation";
import AboutUs from "./components/aboutUs";
import Contact from "./components/contact";
import Career from "./components/career";
import New from "./components/news";
import Press from "./components/press";
import Terms from "./components/terms";
import Privacy from "./components/privacy";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/news" element={<New />} />
          <Route path="/press" element={<Press />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
