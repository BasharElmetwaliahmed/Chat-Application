import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import SearchUser from "./SearchUser";
import ChatListItem from "./ChatListItem";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { db } from "../../lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
function ChatList() {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userchats", user.id), async (doc) => {
      try {
        console.log(user.id, doc.data());
        const chatItems = doc.data().chats;
        //after get chats we need to fetch users data
        const promises = chatItems.map(async (chat) => {
          const docRef = doc(db, "users", chat.reciverId);
          const docSnap = await getDoc(docRef);
          const user = docSnap.data();
          return { ...chat, user };
        });
        //get chats with users data
        const results = await Promise.all(promises);
        setChats(results.sort((a, b) => b.updatedAt - a.updatedAt));
      } catch (err) {
        console.log(err);
        toast.error("Error getting chats in list");
      }
    });
    return () => {
      unsub();
    };
  }, [user.id]);
  return (
    <div className="flex-[1] px-8 border-r-2 border-gray-500 flex flex-col">
      <div className="py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {user.imageUrl ? (
            <img
              src={user.imageUrl}
              alt="user image"
              className="w-[30px] h-[30px] rounded-full"
            />
          ) : (
            <h2 className="bg-red-400 p-6 w-[30px] h-[30px] rounded-full flex justify-center items-center ">
              B
            </h2>
          )}
          <h3 className="font-semibold text-xl">{user.username}</h3>
        </div>
        <PencilSquareIcon className="size-6" />
      </div>
      <SearchUser />
      <div className="mx-2  flex flex-[1] flex-col ">
        {chats.map((chat) => (
          <ChatListItem key={chat.reciverId} chat={chat} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
