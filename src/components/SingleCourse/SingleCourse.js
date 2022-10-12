import React from 'react';
import { Link } from 'react-router-dom';

import './SingleCourse.css'

const SingleCourse = ({ singlecourse }) => {


    const { name, logo, total, id } = singlecourse;
    return (
        <div className='course'>
            <img src={logo} />
            <div className="about">
                <h2>{name}</h2>
                <h4>{total} quizzes</h4>
                <Link to={`/quiz/${id}`} >
                    <button>Start Practics</button>
                </Link>



            </div>
        </div>
    );
};

export default SingleCourse;