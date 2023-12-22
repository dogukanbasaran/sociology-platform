import {Link} from "react-router-dom";
import Footer from "../../components/SharedLayout/Footer";

const LoginPage = () => {
  return (
    <div className="text-white font-open-sans">
    <section className='h-[auto] bg-slate-950'>
    <div className='container flex justify-center items-center py-24'>
        <form className='h-[500px] w-[500px] rounded-md  border-white border-[0.5px] border-opacity-10 bg-slate-800 bg-opacity-20 flex justify-center items-center'>
            <div className='flex flex-col py-16 px-12 gap-4 w-3/4'>
              <input type='email' id='username' placeholder='E-mail' className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none p-2 rounded-md'/>
              <input type='password' id='username' placeholder='Password' className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none p-2 rounded-md'/>
              <button className='bg-blue-800 bg-opacity-50 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-blue-900 duration-300 cursor-pointer'>Sign In</button>
              <span>Don't you have an account? <Link to={"/sign-up"}><br/> <span className="hover:underline text-blue-600">create an account</span></Link></span>
            </div>
        </form>
    </div>
  </section>
  <Footer/>
</div>
  )
}

export default LoginPage
