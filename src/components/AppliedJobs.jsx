import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Myjobs from "./Myjobs";

const AppliedJobs = () => {

    const prevJob = JSON.parse(localStorage.getItem('job-list')) || []
    const [job,setJob] = useState(prevJob)
    console.log(job)

  return (
    <div>
     <div>
        <h1 className="text-center mt-24 mb-20 font-bold text-4xl">Applied Jobs</h1>
      </div>
      <div>
      <div className="flex justify-end mr-20">
        <button className="st">filter by</button>
      </div>
      {
        job.map(job=><Myjobs key={job.id} job={job}></Myjobs>)
      }
      </div>
    </div>
  );
};

export default AppliedJobs;
