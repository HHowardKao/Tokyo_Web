import type { RouteObject } from "react-router-dom";

import DisneyLand from "./pages/DisneyLand";
import Expense from "./pages/Expense";
import Hotel from "./pages/Hotel";
import Transportation from "./pages/Transportation";
import Home from "./pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/disneyland",
    element: <DisneyLand />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/expense",
    element: <Expense />,
  },
  {
    path: "/transportation",
    element: <Transportation />,
  },
];

export default routes;
