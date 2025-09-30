import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Whoweare from "./pages/Whoweare";
import Ourmission from "./pages/Ourmission";
import Impactstoris from "./pages/Impactstoris";
import EducationServices from "./pages/EducationServices";
import HealthHygiene from "./pages/HealthHygiene";
import ChildYouthPrograms from "./pages/ChildYouthPrograms";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate";


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/about/who-we-are",
    element: <Whoweare/>
  },
  {
    path:"/about/our-mission",
    element:<Ourmission/>
  },
  {
    path:"/about/impact-stories",
    element:<Impactstoris/>
  },
  {
    path:"/service/Education Services",
    element:<EducationServices/>
  },
  {
    path:"/service/Health & Hygiene",
    element:<HealthHygiene/>
  },
  {
    path:"/service/Child & Youth Programs",
    element:<ChildYouthPrograms/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/gallary/events",
    element:<Events/>
  },
  {
    path:"/gallary/projects",
    element:<Projects/>
  },
  {
    path:"/donate",
    element:<Donate/>
  }

]);

export default AppRouter;