import { useNavigate } from "react-router-dom";

const exams = [
  "JEE",
  "NEET",
  "UPSC",
];

export default function Exams() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Select Exam
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {exams.map((exam) => (
          <div
            key={exam}
            onClick={() => navigate("/quiz")}
            className="bg-slate-800 p-10 rounded-3xl cursor-pointer hover:scale-105 transition"
          >
            <h2 className="text-4xl font-bold">
              {exam}
            </h2>
          </div>
        ))}

      </div>

    </div>
  );
}
