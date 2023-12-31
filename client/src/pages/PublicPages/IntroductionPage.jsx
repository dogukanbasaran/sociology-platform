import {Link} from "react-router-dom";
import Marx from "../../assets/marx.png"


const IntroductionPage = () => {
  return (
    <div className='font-open-sans bg-slate-950'>
      <section className='flex flex-col justify-center items-center  h-[auto] py-24 relative'>
        <img src={Marx} className="absolute right-0 opacity-20 bottom-0"/>
        <div className='h-[200px]'>
          <span className='text-[72px] font-bold text-gray-200 tracking-wider'>Start sociology from here.</span>
          <p className='text-[24px] text-gray-400 text-center'>The world’s leading and most popular sociologist platform.</p>
        </div>
        <div className='h-[120px] flex gap-2 p-4'>
          <Link to={"/about"}>
              <button className="bg-slate-800 bg-opacity-20 w-[200px] rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300">About</button>
          </Link>
          <Link to={"/sources"}>
              <button className="bg-slate-800 bg-opacity-20 w-[200px] rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300">Sources</button>
          </Link>
        </div>
        <div className='h-[auto] w-3/4'>
          {/* <div className="text-center"><p className="text-[18px] text-gray-400 pb-1 font-semibold border-white border-b-[0.5px] border-opacity-10 inline">Latest Sources</p></div> */}
          
        </div>
      </section>
    </div>
  )
}

export default IntroductionPage
