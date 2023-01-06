import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Order } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);
