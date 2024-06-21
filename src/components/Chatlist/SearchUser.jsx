import { MagnifyingGlassIcon, MinusIcon, PlusIcon, ServerStackIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useState } from 'react';

function SearchUser() {
    const [openSearch,setOpenSearch]= useState(false);
    const iconStyle = "size-6  ";
  return (
    <div className="flex justify-between items-center">
      <div className="flex bg-slate-700  p-2 rounded-md gap-2 w-3/4">
        <MagnifyingGlassIcon className="size-8" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      {
        <button  onClick={()=>setOpenSearch(!openSearch)} className='bg-slate-700 p-3 rounded-md'>
          {openSearch? <MinusIcon className={iconStyle}  />:
          <PlusIcon className={iconStyle} />}
        </button>
      }
    </div>
  );
}

export default SearchUser