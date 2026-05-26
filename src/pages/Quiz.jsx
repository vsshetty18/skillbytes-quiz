import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Database", "OS", "Language"],
  },
  {
    question: "What is FastAPI?",
    options: ["Backend Framework", "Database", "Language", "IDE"],
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");

  const q = questions[current];

  const answerQuestion = (option) => {
    setSelected(option);

    setTimeout(() => {
      setSelected("");

      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        window.location.href = "/dashboard";
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex justify-center items-center p-5">

      <div className="w-full max-w-2xl">

        <div className="mb-6">
          <div className="w-full bg-slate-700 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`
              }}
            />
          </div>

          <p className="mt-3 text-gray-300">
            Question {current + 1} / {questions.length}
          </p>
        </div>

        <motion.div
          key={q.question}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-slate-700 p-6 rounded-3xl mb-10 w-fit max-w-xl"
        >
          <p className="text-2xl">
            {q.question}
          </p>
        </motion.div>

        <div className="space-y-5">

          {q.options.map((option) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={option}
              onClick={() => answerQuestion(option)}
              className="bg-green-600 p-5 rounded-2xl cursor-pointer text-xl"
            >
              {option}
            </motion.div>
          ))}

        </div>

        {selected && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-blue-500 p-5 rounded-2xl w-fit ml-auto mt-8"
          >
            {selected}
          </motion.div>
        )}

      </div>

    </div>
  );
}
