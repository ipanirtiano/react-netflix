/* eslint-disable react/prop-types */
import { useStateProvider } from "../utils/StateProvider"
import Youtube from "react-youtube"
import ReactPlayer from "react-player"

const Modal = ({visible, close}) => {
    

    const [{getMovieTrailer, getDetailMovie}] = useStateProvider() 

    if(!visible) return
    return (
        <>
        <div className="fixed flex z-[120] justify-center items-center inset-0 bg-black text white bg-opacity-30 backdrop-blur-sm p-4" onClick={close}>
            <div className="bg-[#0a0a0a] w-[90%] md:w-[700px]">
            
    {/* 
            {getDetailMovie ? (
                <>
                    <Youtube 
                    videoId={getMovieTrailer.key} 
                    opts={{
                        width: '100%',
                        height: '350px'
                    }}
                    />
                </>
            ) : ''} */}
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

            
            
            <div className="w-full p-4 space-y-2 flex">
            <div className="pr-[15px]">
            <p className="text-sm">Overview:</p>
            <h1 className="text-sm">{getDetailMovie.overview}</h1>
            </div>
            
            <div className="w-[30%]">
                <p className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-sm">thumb_up</span> {getDetailMovie.vote_average}</p>
                <p className="text-sm flex items-center gap-1"><span className="text-gray-400">Language: </span>{getDetailMovie.original_language}</p>
            </div>

            </div>


            <button className="text-white" onClick={close}> close </button>
            </div>
        </div>
        </>
        
    )
}

export default Modal
