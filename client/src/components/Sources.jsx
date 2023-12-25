import React from 'react'

const Sources = () => {
  return (
    <div className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 w-[300px]">
        <div className="p-2 flex flex-col">
            <div className='flex flex-col border-white border-b-[0.5px] border-opacity-10'>
                <span className="text-center text-[20px]">Karl Marx</span>
                 <span className='text-[12px] py-1'>Key Concepts: upper class, middle class, class conflict</span>
            </div>
            <p className="py-2">Karl Marx was a German-born philosopher, economist, political theorist, historian, sociologist, journalist, and revolutionary socialist.</p>
        </div>
        <button className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer w-full">More Detailed</button>
  </div>
  )
}

export default Sources
