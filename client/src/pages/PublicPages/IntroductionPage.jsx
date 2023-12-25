import {Link} from "react-router-dom";


const IntroductionPage = () => {
  return (
    <div className='font-open-sans bg-slate-950'>
      <section className='flex flex-col justify-center items-center  h-[auto] py-24'>
        <div className='h-[200px]'>
          <span className='text-[72px] font-bold text-gray-200 tracking-wider'>Start sociology from here.</span>
          <p className='text-[24px] text-gray-400 text-center'>The world’s leading and most popular sociologist platform.</p>
        </div>
        <div className='h-[120px] flex p-4'>
          <Link to={"/about"}>
              <button className="bg-slate-800 bg-opacity-20 w-[200px] rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300">About us</button>
          </Link>
        </div>
        <div className='h-[auto] w-3/4'>
          <p className="text-[18px] text-gray-400 pb-1 font-semibold border-white border-b-[0.5px] border-opacity-10 inline">Latest Sources</p>
          <div className="flex justify-center gap-8 pt-8">

              <div className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 w-[300px]">
                <div className="p-2 flex flex-col">
                  <span className="border-white border-b-[0.5px] border-opacity-10">Karl Marx</span>
                  <p className="py-2">Karl Marx was a German-born philosopher, economist, political theorist, historian, sociologist, journalist, and revolutionary socialist.</p>
                </div>
                <button className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer w-full">Download</button>
              </div>

              <div className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 w-[300px]">
                <div className="p-2 flex flex-col">
                  <span className="border-white border-b-[0.5px] border-opacity-10">Karl Marx</span>
                  <p className="py-2">Karl Marx was a German-born philosopher, economist, political theorist, historian, sociologist, journalist, and revolutionary socialist.</p>
                </div>
                <button className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer w-full">Download</button>
              </div>


              <div className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 w-[300px]">
                <div className="p-2 flex flex-col">
                  <span className="border-white border-b-[0.5px] border-opacity-10">Karl Marx</span>
                  <p className="py-2">Karl Marx was a German-born philosopher, economist, political theorist, historian, sociologist, journalist, and revolutionary socialist.</p>
                </div>
                <button className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer w-full">Download</button>
              </div>


              
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntroductionPage
