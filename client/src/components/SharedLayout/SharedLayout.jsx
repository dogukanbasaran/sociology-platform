import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

const SharedLayout = () => {
  return (
    <div className="bg-slate-950 h-[720px] text-white">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SharedLayout
