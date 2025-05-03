import React from "react";
import Header from "./components/Header";
import MyButton from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-[1140px] mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Build Fast, Beautiful Interfaces
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Learn modern web development with React and Tailwind CSS. Create responsive, reusable, and elegant components easily.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <MyButton color="blue" text="Get Started" />
          <MyButton color="green" text="View Docs" />
          <MyButton color="gray" text="Contact Us" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              text="Modern Tools"
              description="We use the latest web technologies like React, Tailwind CSS, and Vite to ensure performance and flexibility."
            />
            <Card
              text="Clean Code"
              description="Our components are reusable, well-structured and easy to maintain for real-world projects."
            />
            <Card
              text="Fast Development"
              description="Rapid prototyping and scalable architecture to get your project up and running in no time."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 border-t mt-12">
        © {new Date().getFullYear()} Arcadii Florean. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
