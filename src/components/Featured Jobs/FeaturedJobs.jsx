import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = ({jobs}) => {
    console.log(jobs)
  return (
    <div className="my-container">
      <h2 className="font-bold text-4xl text-center mt-5 pt-5">
        Featured Jobs
      </h2>
      <p className=" text text-center pt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <ul>
        <div className="grid lg:grid-cols-2 gap-8 justify-between mt-12">
        {jobs.data.slice(0,4).map((job) => (
          <SingleJob 
          key={job.id} job={job}></SingleJob>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default FeaturedJobs;
