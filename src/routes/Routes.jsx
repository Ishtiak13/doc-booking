import { createBrowserRouter } from "react-router";

import Root from "../layouts/Root";
 
import Error from "../pages/error/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    
  },
]);
