import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


const Source = () => {

  const {id} = useParams();

  const [source, setSource] = useState({});

  useEffect(() => {
    const fetchSource = async() => {
      try{
        const res = await axios.get(`/api/sources/${id}`);
        setSource(res.data)
      }catch(error){
        console.log(error);
      }
    };

    fetchSource();
  }, [id]);




  return (
    <section className='bg-slate-950'>
        <div className='container h-[auto] p-12 flex flex-col justify-center items-center font-open-sans'>
            <div className='flex w-full justify-between items-center p-5 border-white border-[0.5px] border-opacity-10 rounded-md mb-5'>
                <span className='font-bold text-[24px]'>{source.title}</span>
                <span>Key Concepts: <span className="text-[12px] bg-slate-800 p-2 rounded-md">{source.keyConcepts}</span></span>
            </div>
            <p className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none rounded-md  p-10'>{source.content}</p>
            <span className='p-5 w-full border-white border-[0.5px] border-opacity-10 rounded-md mt-5'>
               Written by <span className="text-blue-500">{source.author}</span>
            </span>
            </div>
    </section>
  )
}

export default Source
