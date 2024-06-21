import React from "react";
import Chat from "./components/Chat/Chat";
import ChatList from "./components/Chatlist/ChatList";
import Userinfo from "./components/Userinfo/Userinfo";

function App() {
  return (
    <div className="h-screen flex justify-center items-center w-screen bg-primaryDark font-sans section">
      <div className="h-5/6 w-5/6 bg-primary rounded-md text-primaryContrast flex py-2 ">
        <ChatList />
        <Chat />
        <Userinfo />
      </div>
    </div>
  );
}

export default App;
