import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TimeLine from './components/TimeLine'
import Stats from './components/Stats'
import FriendDetails from './components/FriendDetails'

const friendsDatas = fetch('../data.json').then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      {
        path: '/',
        element: <Home
        friendsDatas={friendsDatas}
        />,
        
      },
      {
        path: '/TimeLine',
        element: <TimeLine />,
      },
      {
        path: '/stats',
        element: <Stats />,
      },
      {
        path: '/FriendDetails/:id',
        element: <FriendDetails
        friendsDatas={friendsDatas}
        />,
        
      },
    ],


  },


])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} />
    
  </StrictMode>,
)
