import { createBrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Order, Table, Login, Register } from "../pages";
import { PreventLogin, UserCheck } from "../middlewares";

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
      <Route path="/register" element={
        <PreventLogin>
          <Register />
        </PreventLogin>
      } />
    </Routes>
  )
};
