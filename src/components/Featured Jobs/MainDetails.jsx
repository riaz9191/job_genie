import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../utils/fakeDB";
import { toast } from "react-hot-toast";

const MainDetails = () => {
    const handleAddJob = obj =>{
        console.log(obj)
        const prevApplied = JSON.parse(localStorage.getItem('job-list')) || []
        prevApplied.push(obj)
        localStorage.setItem('job-list',JSON.stringify(prevApplied))
        toast.success('Applied 🔥')
    }
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch("jobs.json")
      .then((response) => response.json())
      .then((data) => {
        const newDetails = data.data.find((job) => job.id.toString() === id);
        setDetails(newDetails);
      })
      .catch((error) => console.log(error));
  }, [id]);

  // const job = useLoaderData();
  // console.log(id)
  return (
    <div className="my-container">
      <div>
        <h1 className="text-center mt-24 font-bold text-4xl">Job Details</h1>
      </div>
      <div className="flex gap-5 mt-44 ml-6">
        <div className="flex-1">
          <h1 className="font-bold">
            Job description:{" "}
            <span className="font-normal text-gray-500">
              {details.description}
            </span>
          </h1>
          <h1 className="font-bold mt-4">
            Job Responsibility:{" "}
            <span className="font-normal text-gray-500">
              {details.responsibilities}
            </span>
          </h1>
          <h1 className="font-bold mt-4">
            Job Educational Requirements: <br />{" "}
            <span className="font-normal text-gray-500">
              {details.educational_requirements}
            </span>
          </h1>
          <h1 className="font-bold mt-4 mb6">
            Experiences: <br />{" "}
            <span className="font-normal text-gray-500 ">
              {details.experiences}
            </span>
          </h1>
        </div>
        <div>
          <div className="flex- bg-purple-200  bg-opacity-25 p-8 ml-12 mr-16 pr-20">
            <h1 className="font-bold divide-y mb-4 ">Job Details</h1>
            <div className="border mt-3"></div>
            <p className="mt-3 flex gap-1">
              {" "}
              <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
              <span className="font-bold"> Salary</span>: {details.salary}
            </p>
            <p className="mt-3 flex gap-1">
              {" "}
              <BriefcaseIcon className="h-6 w-6 text-blue-400" />
              <span className="font-bold ">Job Title</span>: {details.name}
            </p>

            <h1 className="font-bold mt-6">Contact Information</h1>
            <div className="border mt-3"></div>
            <p className="mt-3 flex gap-1">
              {" "}
              <PhoneIcon className="h-6 w-6 text-blue-400" />
              <span className="font-bold ">Phone</span>: {details.phone}
            </p>
            <p className="mt-3 flex gap-1">
              {" "}
              <EnvelopeIcon className="h-6 w-6 text-blue-400" />
              <span className="font-bold ">Email</span>: {details.email}
            </p>
            <p className="mt-3 flex gap-1">
              {" "}
              <MapPinIcon className="h-6 w-6 text-blue-400" />
              <span className="font-bold ">Address</span>: {details.address}
            </p>
          </div>
          <div className="ml-12 mt-5 pr-20 justify-end">
            <button onClick={()=>handleAddJob(details)} className="text-xl w-full st pl-4 pr-4 pt-2 pb-2 text-white rounded-xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
