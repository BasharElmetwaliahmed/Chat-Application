import React from "react";
import { useChat } from "../../context/ChatContext";

function ChatListItem({ chat }) {
  const { changeCurrentChat } = useChat();
  return (
    <div
      className="flex  gap-4 border-b-2 border-gray-500 py-6 w-full"
      onClick={() => changeCurrentChat(chat.chatId, chat.user)}>
      {chat?.user.imageUrl ? (
        <img
          src={chat?.user.imageUrl}
          alt="user image"
          className="w-[30px] h-[30px] rounded-full"
        />
      ) : (
        <h2 className="bg-red-400 p-6 w-[60px] h-[60px] rounded-full flex justify-center items-center font-semibold ">
          B
        </h2>
      )}
      <div className="flex flex-col justify-between ">
        <h3 className="font-semibold ">{chat.user.username}</h3>
        {chat.lastMessage && <p>{chat.lastMessage}</p>}
      </div>
    </div>
  );
}

export default ChatListItem;
