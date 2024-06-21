import Message from "./Message";

function Messages() {
  return (
    <div className="flex-1 flex flex-col gap-8 py-8 px-4">
      <Message  />
      <Message  own={true}/>
      <Message />
      <Message own={true} />
      <Message />
    </div>
  );
}

export default Messages;
