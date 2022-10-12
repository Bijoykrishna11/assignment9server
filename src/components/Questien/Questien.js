import React from 'react';
import './Questien.css'
const Questien = (props) => {

    const { question, options, correctAnswer } = props.question
    return (
        <div className='topic'>
            <h2>{question}</h2>
            <div className="ans">

                {

                    options.map(element => { return <h5 > {element}</h5> })

                }

            </div>

        </div>
    );
};

export default Questien;