import React from "react";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
