import LandingView from "../views/LandingView";
import GenerateWorkouts from "../views/GenerateWorkouts";

import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingView />,
  },
  {
    path: "/generate",
    element: <GenerateWorkouts />,
  },
  {
    path: "*",
    element: <LandingView />,
  },
]);
