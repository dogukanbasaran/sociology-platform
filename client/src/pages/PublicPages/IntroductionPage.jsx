import {Link} from "react-router-dom";
import UniversityLogo from "../../assets/marmara.png"
import UniversityLogo2 from "../../assets/bahcesehir.png"

const IntroductionPage = () => {
  return (
    <div className='font-open-sans'>
      <section className='flex flex-col justify-center items-center  h-[auto] py-24'>
        <div className='h-[200px]'>
          <span className='text-[72px] font-bold text-gray-200 tracking-wider'>Start sociology from here.</span>
          <p className='text-[24px] text-gray-400 text-center'>The world’s leading and most popular sociologist platform.</p>
        </div>
        <div className='h-[120px] flex p-4'>
          <Link to={"/about"}>
              <button className="p-2 border-[0.5px] w-[250px] border-white border-opacity-20 bg-blue-800 rounded-sm hover:opacity-75 duration-300">About us</button>
          </Link>
        </div>
        <div className='h-[auto] w-3/4'>
          <p className="text-[18px] text-gray-400 pb-5 font-semibold">contributed by many universities</p>
          <div className="flex justify-center gap-8">
            <img src={UniversityLogo2} width={200} className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:scale-105 duration-300 cursor-pointer"/>
            <img src={UniversityLogo2} width={200} className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:scale-105 duration-300 cursor-pointer"/>
            <img src={UniversityLogo2} width={200} className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:scale-105 duration-300 cursor-pointer"/>
            <img src={UniversityLogo2} width={200} className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:scale-105 duration-300 cursor-pointer"/>
            <img src={UniversityLogo2} width={200} className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:scale-105 duration-300 cursor-pointer"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntroductionPage
