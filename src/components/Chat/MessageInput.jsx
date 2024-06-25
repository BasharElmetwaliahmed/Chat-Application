import { PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";
import { db } from "../../lib/firebase";

function MessageInput() {
  const [text, setText] = useState("");
  const { user } = useAuth();
  const { currentChat } = useChat();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log(text);
    if (text === "") return;

    try {
      await updateDoc(doc(db, "chats", currentChat.chatId), {
        messages: arrayUnion({
          senderId: user.id,
          text,
          createdAt: new Date(),
        }),
      });

      const userIDs = [user.id, currentChat.user.id];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex((c) => {
            console.log(c.chatId.id, currentChat.chatId);

            return c.chatId.id === currentChat.chatId;
          });
          console.log(userChatsData, currentChat.Id);
          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === user.id;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      setText("");
    }
  };
  return (
    <form
      className="border-gray-500 border-t-2 flex gap-4 p-4  self-end items-center  justify-self-end w-full"
      onSubmit={handleSendMessage}>
      <input
        type="text"
        className="outline-none border-none w-full px-2 py-2 rounded-md bg-transparent placeholder:capitalize "
        placeholder="enter message"
        value={text}
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />

      <button className="size-8">
        <PhotoIcon />
      </button>
      <button className="p-3 bg-primaryLight rounded-full hover:opacity-45 transition-all duration-300">
        <PaperAirplaneIcon className="size-4" />
      </button>
    </form>
  );
}

export default MessageInput;
