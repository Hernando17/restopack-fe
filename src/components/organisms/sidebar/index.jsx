import React from "react";

export function SideBar() {
  return (
    <div className="relative bg-white w-[300px] h-[100vh] left-0 top-0">
      <ul className="bg-[#afaf] text-center">
        <li>Dashboard</li>
        <li>Order</li>
        <li>Menu</li>
        <li>Waitress</li>
      </ul>
    </div>
  );
}
