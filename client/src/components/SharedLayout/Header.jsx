import Logo from "../../assets/temporarylogo.svg";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <section className="flex justify-between p-4 bg-slate-950 text-white">
      <div>
        <img src={Logo}/>
      </div>
      <div>
        <ul className="flex gap-2">
            <Link to={"/sign-in"}>
              <li className="p-2 border-[0.5px] border-white border-opacity-20 bg-slate-800 rounded-sm hover:opacity-75 duration-300">
                <span>Sign In</span>
              </li>
            </Link>

            <Link to={"/sign-up"}>
              <li className="p-2 border-[0.5px] border-white border-opacity-20 bg-slate-800 rounded-sm hover:opacity-75 duration-300">
                <span>Sign Up</span>
              </li>
            </Link>
        </ul>
      </div>
    </section>
  )
}

export default Header

