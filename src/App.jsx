import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
