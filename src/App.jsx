import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className=" max-w-container mx-auto  p-6 ">
        <h2 className="text-xl font-semibold mb-4">Main Content</h2>
        
      </main>
    </div>
  );
}

export default App;
