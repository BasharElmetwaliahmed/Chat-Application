import { PaperAirplaneIcon ,PhotoIcon} from "@heroicons/react/24/outline";

function MessageInput() {
  return (
    <div className="border-gray-500 border-t-2 flex gap-4 p-4  self-end items-center  justify-self-end w-full">
      <input
        type="text"
        className="outline-none border-none w-full px-2 py-2 rounded-md bg-transparent placeholder:capitalize "
        placeholder="enter message"
      />


      <button className="size-8">
        <PhotoIcon/>
      </button>
      <button className="p-3 bg-primaryLight rounded-full hover:opacity-45 transition-all duration-300">
        <PaperAirplaneIcon className="size-4"/>
      </button>
    </div>
  );
}

export default MessageInput;
