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
  const assignments = [
    { id: 1, name: "Assignment 2", score: 30 },
    { id: 2, name: "Assignment 3", score: 49 },
    { id: 3, name: "Assignment 4", score: 60 },
    { id: 4, name: "Assignment 5", score: 50 },
    { id: 5, name: "Assignment 6", score: 60 },
    { id: 6, name: "Assignment 7", score: 60 },
    { id: 7, name: "Assignment 8", score: 60 },
  ];

  const totalScore = assignments.reduce((total, assignment) => {
    return total + assignment.score;
  }, 0);

  return (
    <div>
      <h2>Statistics</h2>
      <div className="my-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={assignments}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex justify-center font-bold text-xl mt-5">
          Total Score: {totalScore}/420
        </div>
      </div>
    </div>
  );
};

export default Statistics;
