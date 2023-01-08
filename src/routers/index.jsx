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
      <Route path="/order" element={
        <UserCheck>
          <Order />
        </UserCheck>
      } />
      <Route path="/table" element={
        <UserCheck>
          <Table />
        </UserCheck>
      } />
      <Route path="/login" element={
        <PreventLogin>
          <Login />
        </PreventLogin>
      } />
    </Routes>
  )
};
