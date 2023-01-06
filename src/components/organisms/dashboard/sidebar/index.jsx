import React from "react";
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <div className="relative bg-white w-[300px] h-[100vh] left-0 top-0 py-5">
      <h1 className="text-center font-bold text-[24px]">LOGO</h1>
      <ul className="flex flex-col bg-[#afaf] text-center mt-[32px] py-4 gap-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/table">Table</Link></li>
        <li>Menu</li>
        <li>Waitress</li>
      </ul>
    </div>
  );
}
