import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { UserCircle } from "lucide-react";
import React from "react";
import { DropdownMenuLabel } from "../ui/dropdown-menu";
import { useAuthentication } from "@/provider/AuthProvider";

function Header({ title }) {
  const { logOut } = useAuthentication();
  
  return (
    <div className="bg-white">
      <div className=" flex p-4 justify-between items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <UserCircle />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[12.5rem] bg-white shadow-2xl rounded-md border border-black "
            align="start"
          >
            <DropdownMenuLabel className="p-2  text-xl">
              My Account
            </DropdownMenuLabel>
            <button
              onClick={logOut}
              className="p-2 hover:bg-gray-100 text-xl hover:outline-none rounded-md w-full text-left"
            >
              Log out
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
