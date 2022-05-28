import React from 'react';
import notFoundImg from '../../../Images/not-found/not-found.jpg';

const NotFound = () => {
    return (
        <div>
            <div>
                <img className='w-9/12 mx-auto' src={notFoundImg} alt='' />
            </div>
        </div>
    );
};

export default NotFound;