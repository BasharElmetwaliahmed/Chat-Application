import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";

function Messages({ chat }) {
  const { currentChat } = useChat();
  const { user } = useAuth();
  console.log(chat.messages)
  return (
    <div className="flex-1 overflow-y-scroll flex flex-col gap-8 py-8 px-4">
      {chat?.messages.map((message) => 
        <div className="flex gap-2" key={message.createdAt}>
          {message.senderId !== user.id && (
            <h2 className="bg-red-400 p-6 w-[60px] h-[60px] rounded-full flex justify-center items-center font-semibold ">
              B
            </h2>
          )}
          <div
            className={`flex flex-col gap-2 ${
              message.senderId === user.id ? "ms-auto" : ""
            } w-3/4`}>
            {message.text && (
              <p
                className={` ${
                  message.senderId !== user.id ? "bg-slate-500" : "bg-blue-500 "
                }  bg-slate-500 p-4 rounded-md text-sm`}>
                {message.text}
              </p>
            )}
            {/* <span className="text-xs font-semibold">1m ago</span> */}
          </div>
        </div>
      )}
      {/* <Message  />
      <Message  own={true}/>
      <Message />
      <Message own={true} />
      <Message /> */}
    </div>
  );
}

export default Messages;
