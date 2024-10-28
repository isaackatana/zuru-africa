import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tours from './pages/Tours.jsx';
import Safaris from './pages/Safaris.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

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
        path: "/tours",
        element: <Tours/>
      },
      {
        path: "/safaris",
        element: <Safaris/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <About/>
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
