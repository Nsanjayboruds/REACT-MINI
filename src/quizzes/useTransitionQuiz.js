export const useTransitionQuiz = [
  {
    id: 1,
    question: "What is the main purpose of useTransition in React?",
    options: [
      "To fetch data asynchronously",
      "To delay state updates",
      "To manage state transitions without blocking UI",
      "To style transitions between pages"
    ],
    answer: "To manage state transitions without blocking UI",
    explanation: "useTransition lets you mark updates as non-urgent so the UI remains responsive."
  },
  {
    id: 2,
    question: "What does useTransition return?",
    options: [
      "isPending",
      "startTransition",
      "An array with isPending and startTransition",
      "A boolean and a function"
    ],
    answer: "An array with isPending and startTransition",
    explanation: "It returns `[isPending, startTransition]`."
  }
];
