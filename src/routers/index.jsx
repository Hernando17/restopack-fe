import { createBrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Order, Table, Login } from "../pages";
import PreventLogin from "../middlewares/preventLogin";
import UserCheck from "../middlewares/userCheck";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={
        <UserCheck>
          <Dashboard />
        </UserCheck>
      } />
      <Route path="/order" element={<Order />} />
      <Route path="/table" element={<Table />} />
      <Route path="/login" element={
        <PreventLogin>
          <Login />
        </PreventLogin>
      } />
    </Routes>
  )
};
