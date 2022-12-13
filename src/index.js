import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import AddMealForm from './pages/AddMealForm';
import DetailMeal from './pages/DetailMeal';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add-meal",
    element: <AddMealForm />
  },
  {
    path: "/detail-meal",
    element: <DetailMeal />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
