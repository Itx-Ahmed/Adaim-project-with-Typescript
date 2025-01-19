import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import BlogPage from "./pages/blog";
import AnnouncementPage from "./pages/announcement";
import ContactPage from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
