import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/portfolio/Header";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Services } from "./components/portfolio/Services";
import { Showcase } from "./components/portfolio/Showcase";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import "./styles.css";

function App() {

  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
