import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Publications from "./components/Publications";




function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
      <Analytics />


    </div>
  );
}

export default App;
