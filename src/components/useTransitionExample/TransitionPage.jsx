import React from "react";
import { useTransitionQuiz } from "../../quizzes/useTransitionQuiz";
import Quiz from "../Quiz";

const TransitionPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">useTransition()</h1>
      {/* Your code example or explanation here */}
      <Quiz questions={useTransitionQuiz} />
    </div>
  );
};

export default TransitionPage;
