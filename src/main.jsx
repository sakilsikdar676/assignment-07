import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TimeLine from './components/TimeLine'
import Stats from './components/Stats'
import FriendsDetails from './components/FriendDetails'

import { Bounce, ToastContainer } from 'react-toastify';
import FriendsContextProvider from './context/FriendsContextProvider'
import ErrorElement from './components/ErrorElement'

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
        element: <FriendsDetails
          friendsDatas={friendsDatas}
        />,

      },
    ],
    errorElement: <ErrorElement />


  },


])




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <FriendsContextProvider>
      <RouterProvider router={router} />,
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    </FriendsContextProvider>


  </StrictMode>,
)
