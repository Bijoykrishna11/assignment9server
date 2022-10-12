import React from 'react';
import './SingleCourse.css'

const SingleCourse = ({ singlecourse }) => {
    const { name, logo, total } = singlecourse;
    return (
        <div className='course'>
            <img src={logo} />
            <div className="about">
                <h2>{name}</h2>
                <h4>{total} quizes</h4>
                <button>Start Practics</button>


            </div>
        </div>
    );
};

export default SingleCourse;