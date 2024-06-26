import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {path:'/',element:<HomePage/>}
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
