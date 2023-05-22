import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart({ calculation, calculation2023 }) {
  const data = [
    {
      name: "Opłaty w 2022 r.",
      zl: calculation,
    },
    {
      name: "Opłaty w 2023 r.",
      zl: calculation2023,
    },
    {
      name: "Opłaty z Solar Sense",
      zl: 128,
    },
  ];

  return (
    <BarChart
      width={330}
      height={160}
      data={data}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="zl" fill="#35356a" />
    </BarChart>
  );
}
