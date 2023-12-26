import { useState, useEffect } from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const Sources = () => {

  const [sources, setSources] = useState([]);

  useEffect(() => {
    axios.get("/api/sources/")
    .then(sources => setSources(sources.data))
    .catch(error => console.log(error))
  }, []);



  return (
     <div className="mt-5 grid grid-cols-3">

       {sources.map(source => {

        const truncatedContent = source.content.substring(0, 250);

        return(
            <div key={source._id} className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 w-[360px] mb-5">
                <div className="p-2 flex flex-col">
                    <div className='flex flex-col border-white border-b-[0.5px] border-opacity-10'>
                        <span className="text-center text-[20px]">{source.title}</span>
                        <span className='text-[12px] py-1'>Key Concepts: {source.keyConcepts}</span>
                    </div>
                    <p className="py-2">{truncatedContent + "..."}</p>
                </div>
               <Link to={`/sources/${source._id}`}>
                <button className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer w-full">More Detailed</button>
               </Link>
          </div>
        )
       })}
     </div>
  )
}

export default Sources
