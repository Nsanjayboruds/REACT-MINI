// src/components/useEffectExample/EffectExample.jsx

import React, { useState, useEffect } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    console.log("Effect ran!");
  }, [count]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-xl mx-auto overflow-hidden">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">useEffect Example</h2>
       
      <p className="mb-4">Click the button to increase count and trigger the useEffect.</p>
      <p className="mb-2">Count: <span className="font-semibold text-yellow-300">{count}</span></p>
      <p className="mb-4">Random Number: <span className="text-green-400">{randomNumber}</span></p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Increase Count
      </button>
    </div>
  );
};

export default EffectExample;
