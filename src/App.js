import './Theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import Topnav from './Components/Templates/Topnav';
import Header from './Components/Templates/Header';
import Home from './Components/Home';
import Footer from './Components/Templates/Footer';
import About from './Components/About';

function App() {
  return (
    <div className="bz-app">
      <BrowserRouter>
        <Topnav />
        <Header />
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
