// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import Card from "./components/Card";
import Card2 from "./components/Card2";

function App() {
  return (
    <>
      <Card2 />
      <h1 className="bg-red-400 text-black p-5 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card />
    </>
  );
}

export default App;
