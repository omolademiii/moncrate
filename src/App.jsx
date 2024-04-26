import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./components/mainContent";
import Navigation from './components/navigation';
import AboutUs from './components/aboutUs';
// Import other components if needed

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* Add more routes if needed */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
