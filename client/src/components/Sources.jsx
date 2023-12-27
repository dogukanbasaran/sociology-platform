import { useState, useEffect } from "react"
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Sources = () => {

  const [sources, setSources] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("/api/sources/", {
      params: {
        page: currentPage,
        itemsPerPage: itemsPerPage
      }
    })
    .then(sources => setSources(sources.data))
    .catch(error => console.log(error))

    navigate(`?page=${currentPage}`)
  }, [currentPage, itemsPerPage, navigate]);





  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentSources = sources.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(sources.length / itemsPerPage);
  const prevDisabledButton = currentPage === 1;
  const nextDisabledButton = currentPage === totalPages || currentSources.length < itemsPerPage;

 




  return (
     <div className="mt-5 grid grid-cols-3 gap-4">
       {currentSources.map(source => {

        const truncatedContent = source.content.substring(0, 250);

        return(
            <div key={source._id} className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 w-[360px]">
                <div className="p-2 flex flex-col h-[300px]">
                    <div className='flex flex-col border-white border-b-[0.5px] border-opacity-10'>
                        <span className="text-center text-[20px]">{source.title}</span>
                        <span className='text-[12px] py-1'>Key Concepts: {source.keyConcepts}</span>
                    </div>
                    <p className="py-2">{truncatedContent}</p>
                </div>
               <Link to={`/sources/${source._id}`}>
                <button className="bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer w-full">More Detailed</button>
               </Link>
          </div>
          
        )
       })}

            <div className="col-span-3 flex justify-between">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={prevDisabledButton}
                className={`bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer  ${prevDisabledButton ? "bg-red-800 bg-opacity-90 cursor-not-allowed hover:bg-red-800" : ""}`}
                >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={nextDisabledButton}
                className={`bg-slate-800 bg-opacity-20 rounded-md p-2 border-[0.5px] border-white border-opacity-10 hover:bg-slate-900 duration-300 cursor-pointer  ${nextDisabledButton ? "bg-red-800 bg-opacity-90 cursor-not-allowed hover:bg-red-800" : ""}`}>
                Next
              </button>

                   
            </div>
     </div>
  )
}

export default Sources
