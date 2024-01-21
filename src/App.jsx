
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import AboutUs from './pages/AboutUsPage/AboutUs';
import OurActivities from './pages/ourActivitiesPage/OurActivitie';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-activities" element={<OurActivities />} />
      
        </Routes>
      </Router>
    </div>
  )
}

export default App
