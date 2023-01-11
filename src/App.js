import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import SidePanel from "./Components/SidePanel/SidePanel";
import LiveChat from "./Components/LiveChat/LiveChat";



function App() {
  const showToast = (type, message) => {
    switch (type) {
      case 0:
        toast.warning(message);
        break;
      case 1:
        toast.success(message);
        break;
      default:
        break;
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    // {
    //   path: "/",
    //   element: <Home />,
    // },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
