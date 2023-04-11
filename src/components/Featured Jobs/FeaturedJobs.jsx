import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-riaz9191/main/public/jobs.json?token=GHSAT0AAAAAACAN3SO3QAE2CLCRWSSU52VEZBVGRPQ')
    .then(res=> res.json())
    .then(data=>setJobs(data.data))
  }, []);
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
        {jobs.slice(0,4).map((job) => (
          <SingleJob 
          key={job.id} job={job}></SingleJob>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default FeaturedJobs;
