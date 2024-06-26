import React from "react";
import Login from "./components/Authentication/Login";
import Chat from "./components/Chat/Chat";
import ChatList from "./components/Chatlist/ChatList";
import Userinfo from "./components/Userinfo/Userinfo";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";
import { useChat } from "./context/ChatContext";

function App() {
  const { user, loading } = useAuth();
  const { currentChat } = useChat();
  console.log(currentChat);
  return (
    <div className="h-screen flex justify-center items-center w-screen bg-primaryDark font-sans section">
      <div className="h-5/6 w-5/6 bg-primary rounded-md text-primaryContrast flex  ">
        {user ? (
          <>
            <ChatList />
            {currentChat.chatId && (
              <>
                <Chat />
                <Userinfo />
              </>
            )}
          </>
        ) : (
          <Login />
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
