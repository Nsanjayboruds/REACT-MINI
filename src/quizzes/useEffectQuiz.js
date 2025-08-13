export const useEffectQuiz = [
  {
    id: 1,
    question: "What is the primary purpose of the useEffect hook in React?",
    options: [
      "To create global state",
      "To perform side effects in function components",
      "To handle form input changes",
      "To mutate the DOM directly"
    ],
    answer: "To perform side effects in function components",
    explanation: "useEffect is used to handle side effects like data fetching, subscriptions, or manually changing the DOM."
  },
  {
    id: 2,
    question: "When does useEffect run by default?",
    options: [
      "Only after the first render",
      "After every render",
      "Only before unmounting",
      "Before every render"
    ],
    answer: "After every render",
    explanation: "By default, useEffect runs after every completed render unless you provide a dependency array."
  },
  {
    id: 3,
    question: "How can you make useEffect run only once on mount?",
    options: [
      "By not using any dependencies",
      "By passing [null]",
      "By passing an empty dependency array []",
      "By using useLayoutEffect instead"
    ],
    answer: "By passing an empty dependency array []",
    explanation: "An empty dependency array tells React to run the effect only once when the component mounts."
  },
  {
    id: 4,
    question: "Which is the correct way to clean up a subscription inside useEffect?",
    options: [
      "return cleanup()",
      "cleanup() inside effect body",
      "return () => cleanup()",
      "call cleanup() after setState"
    ],
    answer: "return () => cleanup()",
    explanation: "You return a cleanup function inside useEffect to clean up subscriptions or timers."
  },
  {
    id: 5,
    question: "Which of the following is NOT a valid use case for useEffect?",
    options: [
      "Fetching data",
      "Logging to the console",
      "Updating state synchronously",
      "Setting up a subscription"
    ],
    answer: "Updating state synchronously",
    explanation: "useEffect runs asynchronously after render; synchronous updates should be done within the render body or with useLayoutEffect."
  }
];
