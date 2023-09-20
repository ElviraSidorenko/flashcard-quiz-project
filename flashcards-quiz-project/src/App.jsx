import { useState } from "react";
import FlashcardList from "./FlashcardList";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return <FlashcardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answer: "4",
    options: ["1", "2", "4", "22"],
  },
  {
    id: 2,
    question: "What is the capital of Australia?",
    answer: "Wellington",
    options: ["Wellington", "Canberra", "Auckland", "Sydney"],
  },
  {
    id: 3,
    question: "What is useState in React.js?",
    answer: "hook",
    options: ["hook", "function", "parameter", "attribute"],
  },
];

export default App;
