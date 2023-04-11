import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const SingleJob = ({ job }) => {
  return (
    <div>
      <div className=" p-12 rounded  border">
        <img
          className="object-cover h-10 text-purple-500"
          src={job.logo}
          alt=""
        />
        <p className="font-bold text-gray-800 pt-4">{job.name}</p>
        <p className="text-gray-500">{job.company_name}</p>
        <div className="flex gap-3">
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
        <button className="st text-white pr-4 pl-4 pt-2 pb-2 mt-3 rounded-md">View Details</button>
      </div>
      <div></div>
    </div>
  );
};

export default SingleJob;
