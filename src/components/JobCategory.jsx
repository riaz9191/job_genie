import React, { useEffect, useState } from "react";
import SingleCata from "./SingleCata";

const JobCategory = () => {
  const [jData, setJData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-riaz9191/main/public/categoryData.json?token=GHSAT0AAAAAACAN3SO36FCZRBJOKEQW6CKKZBWEPPQ"
    ) 
      .then((res) => res.json())
      .then((data) => setJData(data.data));
  }, []);
  return (
    <div className="my-container">
      <h2 className="font-bold text-3xl text-center mt-5 pt-5">
        Job Category List
      </h2>
      <p className=" text text-center pt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex justify-between mt-12">
        {jData.slice(0, 4).map((jData) => (
          <SingleCata key={jData.id} jData={jData}></SingleCata>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
