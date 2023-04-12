import React, { useState } from "react";
import SingleJob from "./SingleJob";
import { Link } from "react-router-dom";

const JobDetails = ({ jobs }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div className="my-container">
        <h2 className="font-bold text-4xl text-center mt-5 pt-5">
          Featured Jobs
        </h2>
        <p className=" text text-center pt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        {showMore ? (
          <div className="grid lg:grid-cols-2 gap-8 justify-between mt-12">
            {jobs.data.map((job) => (
              <SingleJob key={job.id} job={job}></SingleJob>
            ))}
          </div>
        ) : (
          <div>
            <div className="grid lg:grid-cols-2 gap-8 justify-between mt-12">
            {jobs.data.slice(0, 4).map((job) => (
              <SingleJob key={job.id} job={job}></SingleJob>
            ))}
          </div>
            <div className="st mx-auto mt-10 w-24 st text-white pr-1 pl-1 pt-2 pb-2 rounded-md ">
              <button onClick={()=> setShowMore(!showMore)} className="">Show more</button>
            </div>
          </div>
        )}
        <ul></ul>
      </div>
    </div>
  );
};

export default JobDetails;
