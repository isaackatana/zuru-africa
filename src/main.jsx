import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Safaris from './pages/Safaris.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFoundPage/>,

    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/safaris",
        element: <Safaris/>
      },
      {
        path: "*",
        element: <NotFoundPage/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
