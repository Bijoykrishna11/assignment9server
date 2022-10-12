import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questien from '../Questien/Questien';

const Quiz = () => {
    const { data } = useLoaderData();
    const { questions } = data;

    console.log(questions)

    return (
        <div>
            {
                questions.map(question => <Questien key={question.id} question={question}></Questien>)
            }

        </div>
    );
};

export default Quiz;