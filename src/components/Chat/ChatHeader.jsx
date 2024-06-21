import { InformationCircleIcon } from "@heroicons/react/24/solid";

function ChatHeader() {
  return (
    <div className="border-b-2 border-gray-500 flex justify-between items-center px-2 ">
      <div className="flex gap-3 px-2 py-4">
        <h2 className="bg-red-400 p-6 w-[30px] h-[30px] rounded-full flex justify-center items-center ">
          B
        </h2>
        <div>
          <h3 className="text-2xl font-semibold">BASHAR ELMETWALI</h3>
          <p className="text-gray-500 font-semibold text-base">
            Lorem ipsum, dolor{" "}
          </p>
        </div>
      </div>
      <InformationCircleIcon className="size-8" />
    </div>
  );
}

export default ChatHeader