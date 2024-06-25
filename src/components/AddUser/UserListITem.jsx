import {
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../lib/firebase";

function UserListITem({ searchedUser }) {
  const { user } = useAuth();
  const addUserHandler = async () => {
    const chatsRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");
    const newChatRef = doc(chatsRef);

    await setDoc(newChatRef, {
      createdAt: serverTimestamp(),
      messages: [],
    });
    await updateDoc(doc(userChatsRef, searchedUser.id), {
      chats: arrayUnion({
        lastMessage: "",
        chatId: newChatRef,
        reciverId: user.id,
        updatedAt: Date.now(),
      }),
    });
    await updateDoc(doc(userChatsRef, user.id), {
      chats: arrayUnion({
        lastMessage: "",
        chatId: newChatRef,
        reciverId: searchedUser.id,
        updatedAt: Date.now(),
      }),
    });
  };
  return (
    <div className="flex justify-between items-center p-2 bg-black bg-opacity-60 rounded-md">
      <div className="flex gap-2 items-center">
        {searchedUser.imageUrl ? (
          <img
            src={searchedUser.imageUrl}
            alt="user image"
            className="w-[30px] h-[30px] rounded-full"
          />
        ) : (
          <h2 className="bg-red-400 p-6 w-[30px] h-[30px] rounded-full flex justify-center items-center   ">
            B
          </h2>
        )}
        <h4>{searchedUser.username}</h4>
      </div>
      <button
        onClick={addUserHandler}
        className="bg-primaryDark text-white p-2 rounded-md hover:opacity-50  transition-all duration-300">
        Add
      </button>
    </div>
  );
}

export default UserListITem;
