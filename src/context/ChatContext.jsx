import { useContext, useState } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthContext";

const initState = {
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
};
const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [currentChat, setCurrentChat] = useState(initState);
  const { user: currentUser } = useAuth();
  const changeCurrentChat = (chat, user) => {
          const chatId = chat.id;

    if (user.blocked.includes(currentUser.id)) {
      setCurrentChat({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    } else if (currentUser.blocked.includes(user.id)) {
      setCurrentChat({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      setCurrentChat({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  };
  const blockUser = (user) => {
    setCurrentChat({ ...state, isReceiverBlocked: !isReceiverBlocked });
  };
  const resetChat = () => setCurrentChat(initState);
  return (
    <ChatContext.Provider
      value={{ currentChat, blockUser, resetChat, changeCurrentChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const context = useContext(ChatContext);
  return context;
};
