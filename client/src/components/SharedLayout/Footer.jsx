import { Link } from "react-router-dom"
import { FaInstagram, FaYoutube, FaXTwitter, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-slate-950 to-slate-900 h-[200px]'>
      <div className='container flex px-48'>

        <div className='h-[150px] basis-1/3'>
          <Link to={"/"}>
            <span className="text-[16px] font-open-sans text-white font-bold">SOCIOLOGY PLATFORM</span>
          </Link>
        </div>
        <div className='h-[150px] basis-1/3 flex justify-center'>
          <ul className="font-semibold font-open-sans text-[15px]">
            <Link to={"/"}>
              <li className="hover:text-blue-500">Home</li>
            </Link>
            <Link to={"/"}>
              <li className="hover:text-blue-500">About</li>
            </Link>
            <Link to={"/"}>
              <li className="hover:text-blue-500">Contact</li>
            </Link>
            <Link to={"/"}>
              <li className="hover:text-blue-500">Help</li>
            </Link>
            <Link to={"/"}>
              <li className="hover:text-blue-500">Blog</li>
            </Link>
          </ul>
          
        </div>        
        <div className='h-[150px] flex justify-end gap-1 basis-1/3'>
            <a href="https://www.instagram.com/dogukanbasarannn/">
              <FaInstagram className="text-[24px] hover:text-blue-400"/>
            </a>
            <a href="https://www.instagram.com/dogukanbasarannn/">
              <FaXTwitter className="text-[24px] hover:text-blue-400"/>
            </a>
            <a href="https://www.instagram.com/dogukanbasarannn/">
              <FaYoutube className="text-[24px] hover:text-blue-400"/>
            </a>
            <a href="https://www.instagram.com/dogukanbasarannn/">
              <FaLinkedin className="text-[24px] hover:text-blue-400"/>
            </a>
        </div>

      </div>
      <p className='text-center pt-4 font-semibold'>2024 Dogukan Basaran No © Copyright.</p>
    </footer>
  )
}

export default Footer
