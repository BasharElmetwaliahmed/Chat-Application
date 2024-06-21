import React from 'react'

function ChatListItem() {
  return (
    <div className='flex  gap-4 border-b-2 border-gray-500 py-6 w-full'>
      <h2 className="bg-red-400 p-6 w-[60px] h-[60px] rounded-full flex justify-center items-center font-semibold ">
        B
      </h2>
      <div className='flex flex-col justify-between '>
        <h3 className='font-semibold '>Bahaa Elmetwali</h3>
        <p>Hello</p>
      </div>
    </div>
  );
}

export default ChatListItem