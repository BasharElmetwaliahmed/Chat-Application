import React from "react";
import { useState } from "react";
import UserListITem from "./UserListITem";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

function AddUser() {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState(null);

  const searchHandler = async (e) => {
    e.preventDefault();
    console.log(searchValue);
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("username", "==", searchValue));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      setUser(querySnapshot.docs[0].data());
    }
  };
  return (
    <div className="w-max h-max  bg-black bg-opacity-80 p-8 rounded-md absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2">
      <form className="flex gap-2 my-8" onSubmit={searchHandler}>
        <input
          type="text"
          className="bg-white text-black rounded-sm outline-none p-2 "
          placeholder="Search user"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="bg-primaryDark text-white p-2 rounded-md hover:opacity-50  transition-all duration-300">
          Search
        </button>
      </form>
      <div className="flex flex-col">
        {user ? (
          <UserListITem searchedUser={user} />
        ) : (
          <p className="text-center">no result</p>
        )}
      </div>
    </div>
  );
}

export default AddUser;
