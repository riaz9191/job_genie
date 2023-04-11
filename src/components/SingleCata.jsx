import React from 'react';

const SingleCata = ({jData}) => {
    return (
        <div>
            <div className=' p-12 rounded shadow-lg bg-gray-100 '>
                <img className='object-cover h-10 text-purple-500' src={jData.logo} alt="" />
                <p className='font-bold text-gray-800 pt-4'>{jData.name}</p>
                <p className='text-gray-500'>{jData.description}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default SingleCata;