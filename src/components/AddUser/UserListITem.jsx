import React from 'react'

function UserListITem() {
  return (
    <div className="flex justify-between items-center p-2 bg-black bg-opacity-60 rounded-md">
      <div className="flex gap-2 items-center">
        <h2 className="bg-red-400 p-6 w-[30px] h-[30px] rounded-full flex justify-center items-center   ">
          B
        </h2>
        <h4>Bashar Elmetwali</h4>
      </div>
      <button className="bg-primaryDark text-white p-2 rounded-md hover:opacity-50  transition-all duration-300">
        Add
      </button>
    </div>
  );
}

export default UserListITem