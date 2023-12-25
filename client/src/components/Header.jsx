import {Link} from "react-router-dom";

const Header = () => {
  return (
    <section className="flex justify-between p-4 bg-slate-950 text-white border-b border-opacity-10 border-white">
      <div>
        <Link to={"/"}>
         <span className="text-[24px] font-open-sans text-white font-bold">SOCIOLOGY SOURCES</span>
        </Link>
      </div>
      <div>
        <ul className="flex gap-2">
            <Link to={"/sign-in"}>
              <li className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer">
                <span>Sign In</span>
              </li>
            </Link>

            <Link to={"/sign-up"}>
              <li className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer">
                <span>Sign Up</span>
              </li>
            </Link>
        </ul>
      </div>
    </section>
  )
}

export default Header

