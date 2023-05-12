
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import React from "react";

const Chart = ({calculation}) => {
  const data = [
    {
      name: "Opłaty w 2022 r.",
      zl: calculation,
    },
    {
      name: "Opłaty w 2023 r.",
      zl: 1,
    }
  ];

  return (
    <>
    
      <BarChart
      width={500}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="zl" fill="#35356a" />
    </BarChart>
    </>
  );
};
export default Chart;
