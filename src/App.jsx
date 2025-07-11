import React from "react";
import Header from "./components/Header";

import MainContent from "./components/MainContent";
import ProjectsSection from "./components/ProjectsSection";
import KeyBenefits from "./components/KeyBenefits";
import StrengthSection from "./components/StrengthSection";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <MainContent />
      <ProjectsSection />
      <KeyBenefits />
      <StrengthSection />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
