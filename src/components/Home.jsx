import React from "react";
import Lottie from "lottie-react";
import job from "../assets/75702-job-proposal-review-animation.json";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import JobCategory from "./JobCategory";

const Home = () => {
  return (
    <>
      <div className="my-container flex flex-col items-center justify-center md:flex-row lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold tracking-wider text-gray-900 sm:text-4xl sm:leading-none ">
              One Step <br /> Closer To Your <br className="hidden md:block" />
              <span className="inline-block text-blue-400">Dream Job</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/books"
              className="btn md:w-auto md:mr-4 st text-white pl-5 pr-3 pt-3 pb-3 start-applying rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative -top-20 lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-56 ">
            <Lottie animationData={job} loop={true} />
          </div>
        </div>
      </div>
      <JobCategory></JobCategory>
    </>
  );
};

export default Home;
