import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Myjobs = ({ job }) => {
  return (
    <Link to={`/${job.id}`}>
    <div className="my-container marz padz">
      
      <div className=" flex justify-center items-center gap-5">
        <div className=" bg-gray-200 pl-10 pr-10 pt-16 pb-16">
          <img className="w-20" src={job.logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-72">
          <div>
            <h1 className="font-bold">{job.name}</h1>
            <p>{job.company_name}</p>
            <div className="flex gap-9">
              <p className="mt-2 text-xs border-2 border-purple-400 pl-2 pr-2 pt-1 pb-1 text-purple-400 font-semibold uppercase">
                {job.remote_or_onsite}
              </p>
              <p className="mt-2 text-xs border-2 border-purple-400 pl-2 pr-2 pt-1 pb-1 text-purple-400 font-semibold uppercase">
                {job.fulltime_or_parttime}
              </p>
            </div>
            <div className="flex gap-4 font-semibold text-gray-500 mt-3">
          <p className="flex gap-1">
            {" "}
            <MapPinIcon className="h-5 w-5 text-gray-500" />
            {job.location}
          </p>
          <p className="flex gap-1">
            {" "}
            <CurrencyDollarIcon className="h-5 w-5 text-gray-500" />
            {job.salary}
          </p>
        </div>
          </div>
          <div>
            <button className="st text-white pr-4 pl-4 pt-2 pb-2 mt-3 rounded-md">
              {" "}
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Myjobs;
