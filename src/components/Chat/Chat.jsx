import React from 'react'
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import Messages from './Messages';

function Chat() {
  return <div className="flex-[2] border-r-2 border-gray-500  flex h-full flex-col">
    <ChatHeader/>
    <Messages/>
    <MessageInput/>
    
  </div>;
}

export default Chat