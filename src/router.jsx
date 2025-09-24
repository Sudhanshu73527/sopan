import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Whoweare from "./pages/Whoweare";


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/about/who-we-are",
    element: <Whoweare/>
  },

]);

export default AppRouter;