import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
      {
        name: "Assignment-1",
        mark: 57,
      },
      {
        name: "Assignment-2",
        mark: 60,
      },
      {
        name: "Assignment-3",
        mark: 60,
      },
      {
        name: "Assignment-4",
        mark: 59,
      },
      {
        name: "Assignment-5",
        mark: 56,
      },
      {
        name: "Assignment-6",
        mark: 55,
      },
      {
        name: "Assignment-7",
        mark: 60,
      },
      {
        name: "Assignment-8",
        mark: 58,
      },
]
  return (
    <div>
        <div className="font-bold text-5xl h-40 bg-slate-100 flex justify-center items-center">
            <p>Statistics</p>
        </div>
        <div className="text-3xl font-bold text-center mt-8 mb-24">
            <p>Here's a chart for all of my assignment marks</p>
        </div>
      <div className="flex justify-center items-center mb-24">
      <AreaChart
        width={950}
        height={600}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="mark"/>
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
