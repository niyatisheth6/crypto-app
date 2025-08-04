import { menuItems } from "@/data";
import clsx from "clsx";
import React from "react";

const SidebarItem = ({ href, icon: Icon, label }) => (
  <li>
    <a
      href={href}
      className={clsx(
        "bg-[#F3F3F7] py-3 px-4 text-black text-sm block rounded-[.625rem] w-full hover:bg-purple-100",
        { "!bg-purple-100": location.pathname === href }
      )}
    >
      {Icon && <Icon size={16} className="inline mr-2.5" />} {label}
    </a>
  </li>
);

function Sidebar() {
  return (
    <div className="bg-white min-w-[16rem] pt-4 px-3">
      <h1 className="text-purple-800 text-2xl mb-6 font-semibold">
        Crypto App
      </h1>
      <ul className="flex flex-col gap-2.5">
        {menuItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
