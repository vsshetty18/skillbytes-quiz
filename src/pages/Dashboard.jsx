import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  BarChart,
  Bar,
} from "recharts";

const lineData = [
  { day: "Mon", users: 100 },
  { day: "Tue", users: 300 },
  { day: "Wed", users: 250 },
  { day: "Thu", users: 450 },
  { day: "Fri", users: 500 },
];

const pieData = [
  { name: "Completed", value: 82 },
  { name: "Dropped", value: 18 },
];

const barData = [
  { hour: "9AM", users: 40 },
  { hour: "12PM", users: 90 },
  { hour: "3PM", users: 140 },
  { hour: "6PM", users: 100 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-slate-800 p-6 rounded-3xl">
          <h2 className="text-gray-400">Daily Users</h2>
          <p className="text-4xl font-bold">2,430</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-3xl">
          <h2 className="text-gray-400">Questions Served</h2>
          <p className="text-4xl font-bold">12,210</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-3xl">
          <h2 className="text-gray-400">Completion Rate</h2>
          <p className="text-4xl font-bold">82%</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-3xl">
          <h2 className="text-gray-400">Avg Response Time</h2>
          <p className="text-4xl font-bold">4.1s</p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-slate-800 rounded-3xl p-6 h-[350px]">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line dataKey="users" />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="bg-slate-800 rounded-3xl p-6 h-[350px]">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

        <div className="bg-slate-800 rounded-3xl p-6 h-[350px] md:col-span-2">

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}
