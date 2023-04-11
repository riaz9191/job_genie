import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const MainDetails = () => {
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
    <div>
      <div>
        <h1 className="text-center mt-28 font-bold text-4xl">Job Details</h1>
      </div>
      <div className="my-container">
        <div>
          <h1>Job description:</h1>
          <h1>Job Responsibility:</h1>
          <h1>Job Educational Requirements:</h1>
          <h1>Experiences:</h1>
        </div>
        <div>
            <h1>Job Details</h1>
            <p>Salary:</p>
            <p>Job Title:</p>

            <h1>Contact Information</h1>
            <p>Phone:</p>
            <p>Email:</p>
            <p>Address:</p>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
