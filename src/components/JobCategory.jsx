import React from "react";
import SingleCata from "./SingleCata";

const JobCategory = ({ jData }) => {
  // console.log(jData);
  return (
    <div className="my-container">
      <h2 className="font-bold text-3xl text-center mt-5 pt-5">Job Category List</h2>
      <p className=" text text-center pt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex justify-between mt-12">
      {jData.data.slice(0,4).map((jData) => (
        <SingleCata key={jData.id} jData={jData}></SingleCata>
      ))}
      </div>
    </div>
  );
};

export default JobCategory;
