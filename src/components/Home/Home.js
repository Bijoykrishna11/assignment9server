import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Head from '../Head/Head';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Home.css'

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className='home-container'>

            <div className="head">
                <Head></Head>
            </div>
            <div className="books-container">
                {
                    courses.map(singlecourse => <SingleCourse
                        key={singlecourse.id}
                        singlecourse={singlecourse}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Home;