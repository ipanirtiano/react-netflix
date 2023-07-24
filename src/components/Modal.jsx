/* eslint-disable react/prop-types */
import { useStateProvider } from "../utils/StateProvider"
import ReactPlayer from "react-player"

const Modal = ({visible, close}) => {
    const [{getMovieTrailer, getDetailMovie, getMovieGenre}] = useStateProvider() 

    if(!visible) return
    return (
        <>
        <div className="fixed flex z-[120] justify-center items-center inset-0 bg-black text white bg-opacity-30 backdrop-blur-sm p-4" onClick={close}>
            <div className="bg-[#0a0a0a] w-[90%] md:w-[800px] pb-4">
            
            <div className="pt-[56.25%] relative">
            {
                <ReactPlayer 
                url={`url='https://www.youtube.com/watch?v=${getMovieTrailer.key}`}
                width='100%'
                height='100%'
                className='absolute top-0 left-0'
                />
            }
            </div>
    
            
            <div className="w-full space-y-2 flex flex-col md:flex-row">
            <div className="p-4 md:w-[75%]">
            <p className="text-sm">Overview:</p>
            <h1 className="text-sm">{getDetailMovie.overview}</h1>
            </div>
            
            <div className="px-4 md:pr-4 flex gap-3 md:block md:w-[25%]">
                <p className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-sm">thumb_up</span> {getDetailMovie.vote_average}</p>
                <p className="text-sm flex items-center gap-1"><span className="text-gray-400">Language: </span>{getDetailMovie.original_language}</p>
                <p className="text-sm gap-1"><span className="text-gray-400">Genre: </span>{getMovieGenre.name}</p>
            </div>

            </div>
            </div>
        </div>
        </>
        
    )
}

export default Modal
