import { createBrowserRouter } from "react-router";

import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import MyBookings from "../pages/my bookings/MyBookings";
import Blog from "../pages/blog/Blog";
import Error from "../pages/error/Error";
import DoctorDetails from "../pages/doctorDetails/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/doctors.json"),
        Component: Home,
        hydrateFallbackElement: (
          <div className="w-full flex justify-center">
            <span className=" w-[10%] h-svh text-center loading loading-dots "></span>
          </div>
        ),
      },
      { path: "/my-bookings", Component: MyBookings,
        loader: () => fetch("/doctors.json"),
        hydrateFallbackElement: (
          <div className="w-full flex justify-center">
            <span className=" w-[10%] h-svh text-center loading loading-dots "></span>
          </div>)
       },
      { path: "/blogs", Component: Blog,
        loader: () => fetch("/questions.json"),
        hydrateFallbackElement: (
          <div className="w-full flex justify-center">
            <span className=" w-[10%] h-svh text-center loading loading-dots "></span>
          </div>)
       },
      {
        path: "/doctorDetails/:id",
        Component: DoctorDetails,
        loader: () => fetch("/doctors.json"),
      },
    ],
  },
]);
