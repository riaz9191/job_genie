import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { useLoaderData } from "react-router-dom";
import JobDetails from "./JobDetails";

const FeaturedJobs = ({jobs}) => {
  return (
    // <div>
    //     {
    //         jobs.data.map(job=><JobDetails key={job.id} jobs={job}></JobDetails>)
    //     }
    // </div>
    <div>
      <JobDetails key={jobs.id} jobs={jobs}></JobDetails>
      
    </div>
    
  );
};

export default FeaturedJobs;
