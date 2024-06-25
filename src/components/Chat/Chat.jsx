import { doc, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useChat } from "../../context/ChatContext";
import { db } from "../../lib/firebase";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

function Chat() {
  const { currentChat } = useChat();
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", currentChat.chatId), (doc) => {
      setChat(doc.data());
      console.log(doc.data())
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <div className="flex-[2] border-r-2 border-gray-500  flex h-full flex-col">
      <ChatHeader />
      <Messages chat={chat} />
      <MessageInput />
    </div>
  );
}

export default Chat;
