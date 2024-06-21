import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import SearchUser from "./SearchUser";
import ChatListItem from "./ChatListItem";
function ChatList() {
  return (
    <div className="flex-[1] px-8 border-r-2 border-gray-500 flex flex-col">
      <div className="py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="bg-red-400 p-6 w-[30px] h-[30px] rounded-full flex justify-center items-center ">
            B
          </h2>
          <h3 className="font-semibold text-xl">Bashar ELmetwali</h3>
        </div>
        <PencilSquareIcon className="size-6" />
      </div>
      <SearchUser />
      <div className="mx-2  flex flex-[1] flex-col ">
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      
      </div>
    </div>
  );
}

export default ChatList;
