import React, { useEffect, useState } from "react";
import SingleCata from "./SingleCata";

const JobCategory = () => {
  const [jData, setJData] = useState([]);
  useEffect(() => {
    fetch("/categoryData.json")
      .then((res) => res.json())
      .then((data) => setJData(data.data));
  }, []);
  return (
    <div className="my-container">
  <h2 className="font-bold text-3xl text-center mt-5 pt-5">
    Job Category List
  </h2>
  <p className="text-center pt-4">
    Explore thousands of job opportunities with all the information you need.
    It's your future.
  </p>
  <div className="flex flex-wrap gap-14 justify-center mt-12">
    {jData.slice(0, 4).map((jData) => (
      <SingleCata key={jData.id} jData={jData} />
    ))}
  </div>
</div>

  );
};

export default JobCategory;
