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

  //calculate total score
  const totalScore = assignments.reduce((acc, curr) => acc + curr.score, 0);

  return (
    <div>
      <h2 className="font-bold text-center my-6">Assignment Marks</h2>
      <div className="my-container">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
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
      </div>
      <div className="flex justify-center mt-4 font-bold">
        <p>Total score: {totalScore}/420</p>
      </div>
    </div>
  );
};

export default Statistics;
