import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Order, Table, Login } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/table",
    element: <Table />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
