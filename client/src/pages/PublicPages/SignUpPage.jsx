import Footer from "../../components/SharedLayout/Footer";

const SignUpPage = () => {
  return (
    <div className="text-white font-open-sans">
      <section className='h-[auto] bg-slate-950'>
        <div className='container flex justify-center items-center py-24 font-open-sans'>
            <form className='h-[500px] w-[500px] rounded-md  border-white border-[0.5px] border-opacity-10 bg-slate-800 bg-opacity-20 flex justify-center items-center'>
                <div className='flex flex-col py-16 px-12 gap-4 w-3/4'>
                  <input type='text' id='username' placeholder='Full name' className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none p-2 rounded-md'/>
                  <input type='email' id='username' placeholder='E-mail' className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none p-2 rounded-md'/>
                  <input type='password' id='username' placeholder='Password' className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none p-2 rounded-md'/>
                  <button className='bg-green-800 bg-opacity-50 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-green-900 duration-300 cursor-pointer'>Sign Up</button>
                </div>
            </form>
        </div>
      </section>
      <Footer/>
      </div>
  )
}

export default SignUpPage
