import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/NavbarComp/Navbar";
import Home from "./Components/HomeComp/Home";
import Services from "./Components/ServicesComp/Services";
import About from "./Components/AboutComp/About";
import Contact from "./Components/ContactComp/Contact";
import Footer from "./Components/FooterComp/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
