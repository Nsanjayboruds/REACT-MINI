import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What does useEffect do in React?",
      options: [
        "It lets you perform side effects in function components",
        "It directly updates the DOM",
        "It handles form inputs",
        "It replaces useState"
      ],
      correctAnswer: "It lets you perform side effects in function components"
    },
    {
      question: "When does useEffect run?",
      options: [
        "Only on mount",
        "On every render",
        "After every render by default",
        "Before rendering"
      ],
      correctAnswer: "After every render by default"
    },
    {
      question: "How do you run useEffect only once?",
      options: [
        "By not including dependencies",
        "By passing an empty dependency array []",
        "By passing null as dependency",
        "By wrapping it in useCallback"
      ],
      correctAnswer: "By passing an empty dependency array []"
    }
  ];

  const currentQuestion = questions[questionIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  useEffect(() => {
    console.log("Question changed:", currentQuestion.question);
  }, [questionIndex]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6 overflow-hidden">
      <div className="bg-white text-[black] shadow-lg rounded-xl p-8 w-full max-w-xl text-center">
        {!showResult ? (
          <>
            <h2 className="text-2xl font-bold mb-6">{currentQuestion.question}</h2>
            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className={`py-2 px-4 rounded-lg border transition-colors duration-300 ${
                    selectedAnswer
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-200 border-green-500"
                        : option === selectedAnswer
                        ? "bg-red-200 border-red-500"
                        : "bg-gray-100 border-gray-300"
                      : "bg-white border-gray-300 hover:bg-blue-100"
                  }`}
                  disabled={!!selectedAnswer}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg">Your score: {score} / {questions.length}</p>
            <button
              onClick={() => {
                setQuestionIndex(0);
                setScore(0);
                setShowResult(false);
                setSelectedAnswer(null);
              }}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
