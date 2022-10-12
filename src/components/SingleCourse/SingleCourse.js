import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ClickContext } from '../../layout/Main';
import './SingleCourse.css'

const SingleCourse = ({ singlecourse }) => {

    const quizId = useContext(ClickContext)
    const { name, logo, total, id } = singlecourse;
    return (
        <div className='course'>
            <img src={logo} />
            <div className="about">
                <h2>{name}</h2>
                <h4>{total} quizzes</h4>
                <Link onClick={() => quizId(id)} to={`/quiz/${id}`} >
                    <button>Start Practics</button>
                </Link>



            </div>
        </div>
    );
};

export default SingleCourse;