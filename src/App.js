import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main, { QuizId } from './layout/Main';
import Topics from './components/Topics/Topics';
import React, { useContext } from 'react';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Quiz from './components/Quiz/Quiz';

function App() {

  const id = useContext(QuizId)
  console.log(id)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('topics.json'),
          element: <Home></Home>

        },
        {
          path: '/topocs',
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${id}`),
          element: <Quiz></Quiz>
        }
      ]
    },
    {
      path: '*',
      element: <div>
        <h1>NO data Available</h1>
        <p>404</p></div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
