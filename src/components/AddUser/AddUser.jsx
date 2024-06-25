import React from "react";
import UserListITem from "./UserListITem";

function AddUser() {
  return (
    <div className="w-max h-max  bg-black bg-opacity-80 p-8 rounded-md absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2">
      <form className="flex gap-2 my-8">
        <input
          type="text"
          className="bg-white text-black rounded-sm outline-none p-2 "
          placeholder="Search user"
        />
        <button className="bg-primaryDark text-white p-2 rounded-md hover:opacity-50  transition-all duration-300">
          Search
        </button>
      </form>
      <div className="flex flex-col">
        <UserListITem />
      </div>
    </div>
  );
}

export default AddUser;
