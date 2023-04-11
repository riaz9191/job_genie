import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MainDetails = () => {
    const job = useLoaderData();
    console.log(job)
    return (
        <div>
            <h1>main</h1>
        </div>
    );
};

export default MainDetails;