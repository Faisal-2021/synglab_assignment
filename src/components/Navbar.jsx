import React from "react";
import { useToggleUserAddMOdel } from "../zustand/UserModel";

function Navbar() {
  const {  setOpen } = useToggleUserAddMOdel();
  return (
    <nav className=" fixed w-full  flex py-2 px-4 bg-sky-300 shadow-md shadow-sky-600 mb-10  z-50 top-0  justify-between">
      <img src="/synlabs_logo.png" alt="logo" className="w-16 h-12" />

      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white   focus:outline-none "
        onClick={() => setOpen()}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
          Add New User
          <svg
            className=" inline-flex w-4 h-4 self-center ml-1 items-center"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 21a8 8 0 0 1 13.292-6" />
            <circle cx="10" cy="8" r="5" />
            <path d="M19 16v6" />
            <path d="M22 19h-6" />
          </svg>
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
