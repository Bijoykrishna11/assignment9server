import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>what is the purpose of react-router??
            </h3>
            <p>  React Router is a standard library for routing in React. <br /> It enables the navigation among views of various components in a React  <br /> Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>


            <h3>How does context API work??
            </h3>
            <p> New API solves one major problem–prop drilling. Even if you’re not <br /> familiar with the term, if you’ve worked on a React.js app, it <br /> has probably happened to you. Prop drilling is the processing of <br /> getting data from component A to component Z by passing it  <br /> through multiple layers of intermediary React components. The
                <br /> component will receive props indirectly and you, the React <br /> Developer will have to ensure everything works out right.</p>

            <h3>What is useRef hook?

            </h3>
            <p>  A hook is a special function which enables one use state and other <br /> React features without writing ES6 class components which are <br /> generally considered difficult to understand, use and master. <br />useRef hook is part of the React Hooks API. It is a function which <br /> takes a maximum of one argument and returns an Object. The
                <br /> returned object has a property called current whose value is the <br /> argument passed to useRef. If you invoke it without an <br /> argument, the returned object's current property is set to <br /> undefined. The code below illustrates how to invoke the <br /> useRef hook in functional components.</p>

        </div>
    );
};

export default Blog;