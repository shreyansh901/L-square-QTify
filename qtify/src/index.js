import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      { path: "/",
        element: <HomePage/>,
      },
   /*   {
        path: "/album/:albumId",
        element: <AlbumPage />,
      },*/
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
