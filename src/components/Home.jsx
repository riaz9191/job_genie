import React from "react";
import Lottie from "lottie-react";
import job from "../assets/75702-job-proposal-review-animation.json";
import { Link, useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./Featured Jobs/FeaturedJobs";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <>
      <div className="my-container mt-10 flex flex-col items-center justify-center md:flex-row lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-wider text-gray-900 sm:text-4xl sm:leading-none lg:text-6xl">
              One Step <br className="" /> Closer To Your <br className="hidden md:block" />
              <span className="inline-block text-blue-400">Dream Job</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg lg:text-xl">
              Explore thousands of job opportunities with all the information
              you need. It's your future. Come find it. Manage all your job
              applications from start to finish.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/"
              className="btn md:w-auto md:mr-4 st text-white pl-5 pr-3 pt-3 pb-3 start-applying rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative -top-20 lg:w-1/2">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-64 md:h-72 lg:h-80">
            <Lottie animationData={job} loop={true} />
          </div>
        </div>
      </div>
      <JobCategory />
      <FeaturedJobs key={jobs.id} jobs={jobs} />
    </>
  );
};

export default Home;
