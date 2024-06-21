import React from 'react'

function Message({own}) {
  return (
    <div className="flex gap-2">
     {!own&& <h2 className="bg-red-400 p-6 w-[60px] h-[60px] rounded-full flex justify-center items-center font-semibold ">
        B
      </h2>}
      <div className={`flex flex-col gap-2 ${own?"ms-auto":""} w-3/4`}>
        <p className={` ${!own?'bg-slate-500':'bg-blue-500 '}  bg-slate-500 p-4 rounded-md text-sm`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          temporibus, ratione corrupti quaerat nam debitis itaque dolor
          laboriosam vel
        </p>
        <span className='text-xs font-semibold'>1m ago</span>
      </div>
    </div>
  );
}

export default Message