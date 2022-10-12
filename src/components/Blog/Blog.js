import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='quistien'>
            <div className='single-ques'>
                <h3>what is the purpose of react-router??</h3>
                <p>  React Router is a standard library for routing in React.  It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>

            <div className='single-ques'>
                <h3>How does context API work??
                </h3>
                <p> New API solves one major problem–prop drilling. Even if you’re not  familiar with the term, if you’ve worked on a React.js app, it has probably happened to you. Prop drilling is the processing of  getting data from component A to component Z by passing it  through multiple layers of intermediary React components. The component will receive props indirectly and you, the React Developer will have to ensure everything works out right.</p>

            </div>
            <div className='single-ques'>
                <h3>What is useRef hook?</h3>

                <p>  A hook is a special function which enables one use state and other  React features without writing ES6 class components which are  generally considered difficult to understand, use and master. useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the  argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</p>

            </div>



        </div>
    );
};

export default Blog;