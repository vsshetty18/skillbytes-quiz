import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 to-green-900 p-5">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold mb-6 text-center"
      >
        SkillBytes Quiz
      </motion.h1>

      <p className="text-gray-300 mb-10 text-center max-w-xl">
        WhatsApp-style interactive quiz platform with analytics dashboard.
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/exams")}
        className="bg-green-500 px-8 py-4 rounded-2xl text-2xl font-semibold"
      >
        Start Quiz
      </motion.button>

    </div>
  );
}
