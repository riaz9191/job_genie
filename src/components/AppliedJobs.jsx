import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Myjobs from "./Myjobs";
import { Menu } from "@headlessui/react";

const AppliedJobs = () => {
  const prevJob = JSON.parse(localStorage.getItem("job-list")) || [];
  const [job, setJob] = useState(prevJob);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Remote", "Full-time", "Part-time", "Onsite"];

  const filteredJobs =
    selectedFilter === "All"
      ? job
      : job.filter((job) => {
          if (selectedFilter === "Remote") {
            return job.remote_or_onsite === "remote";
          } else if (selectedFilter === "Onsite") {
            return job.remote_or_onsite === "onsite";
          } else if (selectedFilter === "Full-time") {
            return job.fulltime_or_parttime === "full-time";
          } else if (selectedFilter === "Part-time") {
            return job.fulltime_or_parttime === "part-time";
          } else {
            return true;
          }
        });

  return (
    <div>
      <div>
        <h1 className="text-center mt-6 md:mt-24 mb-6 md:mb-20 font-bold text-4xl">
          Applied Jobs
        </h1>
      </div>
      <div>
        <div className="flex justify-end md:mr-20">
          <Menu as="div" className="relative inline-block text-left">
            <div className="md:mr-40">
              <Menu.Button className="st inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ">
                Filter by: {selectedFilter}
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {filters.map((filter) => (
                <Menu.Item key={filter}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
        {filteredJobs.map(
          (job) =>
            job && (
              <Myjobs key={job.id} job={job} filter={selectedFilter} />
            )
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
