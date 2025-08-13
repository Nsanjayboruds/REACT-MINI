// src/components/useEffectExample/EffectPage.jsx

import React from "react";
import EffectExample from "./EffectExample";
import { useEffectQuiz } from "../../quizzes/useEffectQuiz";
import Quiz from "../Quiz";
import LiveCodeBlock from "../LiveCodeBlock";

const EffectPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-cyan-400 font-bold mb-4">📘 useEffect()</h1>
      <p className="mb-6 text-white">
        <strong>useEffect</strong> is a React hook that lets you run side effects in your components.
        It's commonly used for data fetching, subscriptions, or manually modifying the DOM.
      </p>

      {/* Interactive Example */}
      <EffectExample />
      <LiveCodeBlock/>

      {/* Quiz Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-pink-400 mb-4">🧠 Test Your Knowledge</h2>
        <Quiz questions={useEffectQuiz} />
      </div>
    </div>
  );
};

export default EffectPage;
