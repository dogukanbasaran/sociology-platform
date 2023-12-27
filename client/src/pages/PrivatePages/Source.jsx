import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { Link} from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";




const Source = () => {


  const {id} = useParams();
  const [source, setSource] = useState({});
  const [copied, setCopied] = useState(false);

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

  const copySource = () => {
    const textToCopy = `http://localhost:3000/sources/${source._id}`; 
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(err => {
        console.error('Kaynak kopyalanırken bir hata oluştu:', err);
      });
  };





  return (
    <section className='bg-slate-950'>
        <div className='container h-[auto] p-16 flex flex-col justify-center items-center font-open-sans'>
            <div className='flex w-full justify-between items-center p-5 border-white border-[0.5px] border-opacity-10 rounded-md mb-5'>
                <span className='font-bold text-[24px]'>{source.title}</span>
                <span>Key Concepts: <span className="text-[12px] bg-slate-800 p-2 rounded-md">{source.keyConcepts}</span></span>
            </div>
            <p className='border-white border-[0.5px] border-opacity-10 bg-transparent focus:outline-none rounded-md  p-10 w-full'>{source.content}</p>
                <div className='p-5 w-full border-white border-[0.5px] border-opacity-10 rounded-md mt-5 flex justify-between'>
                  <div className="flex justify-start gap-1"><span>Written by:</span><span className="text-blue-500">{source.author}</span></div>
                  <div className="flex justify-end items-center gap-2"><span>Source ID: </span><span>{source._id}</span><button className="bg-slate-800 bg-opacity-100 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-700 duration-300 cursor-pointer" onClick={copySource}>
                    
                    {copied ? <MdDone/> : <IoCopyOutline/>}
                    
                    </button></div>
                </div>
                <div className="flex justify-end px-5 w-full mt-2"><Link to={"/sources"} className="text-blue-500 hover:underline text-[16px]">BACK TO SOURCES</Link></div>
            </div>
    </section>
  )
}

export default Source
