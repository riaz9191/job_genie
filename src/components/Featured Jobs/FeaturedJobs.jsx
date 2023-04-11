import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/data')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Jobs:</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
