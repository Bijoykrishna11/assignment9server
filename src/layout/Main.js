import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
export const ClickContext = createContext();
export const QuizId = createContext();

const Main = () => {
    let id;
    const quizId = (props) => {
        id = props;
    }

    return (
        <div>
            <QuizId.Provider
                value={id}>

                <ClickContext.Provider value={quizId}>
                    <Header></Header>
                    <Outlet></Outlet>
                </ClickContext.Provider>

            </QuizId.Provider>


        </div>
    );
};

export default Main;