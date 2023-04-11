import React from 'react';

const SingleJob = ({job}) => {
    return (
        <div>
            <div className=' p-12 rounded shadow-lg bg-gray-100 '>
                <img className='object-cover h-10 text-purple-500' src={job.logo} alt="" />
                <p className='font-bold text-gray-800 pt-4'>{job.name}</p>
                <p className='text-gray-500'>{job.description}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default SingleJob;