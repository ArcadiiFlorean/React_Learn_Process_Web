import React from "react";
import MyButton from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Header />
      <MyButton color="red" />
      <MyButton color="blue" />
      <MyButton color="yellow" />
      <Card text="card-2" />
      <Card text="card-3" description="LOrem-55" />
      <Card text="card8" description="LOrem" />
    </div>
  );
}
export default App;
