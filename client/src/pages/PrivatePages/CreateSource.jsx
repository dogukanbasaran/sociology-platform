import { useState} from "react";
import { useNavigate } from "react-router";
import { IoCreateOutline } from "react-icons/io5";



const CreateSource = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({});


    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    const handleCreate = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch("/api/sources/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log(data);
            navigate("/");
        }catch(error){
            console.log(error);
        }
    }

  return (
    <section className='h-[auto] bg-slate-950'>
        <div className='p-12 container flex justify-center'>
            <form onSubmit={handleCreate} className='h-[auto] w-3/4 flex justify-center items-center'>
                <div className='flex flex-col py-16 px-12 gap-4 rounded-md  border-white border-[0.5px] border-opacity-10 bg-slate-800 bg-opacity-20 w-full'>
                    <div className='flex justify-start w-full flex-row gap-2'>
                        <input  onChange={handleChange} type='text' id='title' placeholder='Title' className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none focus:bg-white duration-500 p-2 rounded-md w-2/6 focus:text-black'/>
                        <input  onChange={handleChange} type='text' id='keyConcepts' placeholder='Key concepts' className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none p-2 rounded-md w-4/6 focus:bg-white duration-500 focus:text-black'/>
                    </div>
                    <textarea onChange={handleChange} id="content" rows={20} placeholder='Write a content...' className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none rounded-md resize-none focus:bg-white duration-500 focus:text-black p-10'></textarea>
                    <button className=' bg-opacity-50 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-blue-900 duration-200 flex items-center justify-center gap-2'><IoCreateOutline className="text-[24px]"/><span>Publish</span></button>
                    
                </div>
            </form>

        </div>

    </section>
  )
}

export default CreateSource
