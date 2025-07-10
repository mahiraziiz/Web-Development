import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="bg-black text-white font-bold text-4xl p-4 rounded shadow-md">
        Chai And Full Stack
      </h1>

      <p className="text-gray-800 font-semibold text-2xl">
        Jokes: {jokes.length}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {jokes.map((joke, index) => (
          <div
            key={joke.id || index}
            className="bg-white p-4 rounded shadow-md border border-gray-200"
          >
            <h3 className="font-bold text-lg text-indigo-600">{joke.title}</h3>
            <p className="text-gray-700 mt-2">{joke.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
