import { useEffect } from "react"
import { useStateProvider } from "../utils/StateProvider"
import axios from "axios"
import { options } from "../request"
import { actions } from "../utils/Constans"
import Youtube from "react-youtube"
import RowMovie from "../components/RowMovie"

const Detail = () => {

    const [{getDetailMovie, getMovieTrailer}, dispatch] = useStateProvider() 

    useEffect(() => {
        if(getDetailMovie){
            const getMovieTrailer = async () => {
                const trailer = await axios.get(`https://api.themoviedb.org/3/movie/${getDetailMovie.id}/videos`, options)
                .then(response => response.data.results.find(vid => vid.name == 'Official Trailer'))
                dispatch({type: actions.GET_MOVIE_TRAILER, trailer})
            }

            getMovieTrailer()
        }
    },[getDetailMovie, dispatch])


    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str;
        }
    }




    return (
        <>
        <div className="w-full h-[380px] text-white flex justify-start">
            <div className="w-full h-full">
                {getMovieTrailer ? 
                (
                <>
                <Youtube
                containerClassName='trailer'
                videoId={getMovieTrailer.key}  
                opts={{
                    width: '100%',
                    height: '350px'
                }}
                />
                </>
                ) 
                : (
                <>

                <div className="absolute w-full h-[380px] bg-gradient-to-r from-black"></div>
                <img className="object-cover w-full h-full" src={`https://image.tmdb.org/t/p/original/${getDetailMovie?.backdrop_path}`} alt={getDetailMovie?.title} />
                <div className="absolute w-full md:top-[10%] top-[100px] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">{getDetailMovie?.title}</h1>
                <div className="my-4">
                    <button className=" bg-gray-300 text-black border-gray-300 py-2 px-5 hover:bg-red-600 hover:text-gray-300 transition-all">Play</button>
                    <button className="border text-white ml-4 border-gray-300 py-2 px-5">Watch Later</button>
                </div>
                <p className="text-gray-400 text-sm mb-1">Relased: {getDetailMovie?.release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(getDetailMovie?.overview, 180)}</p>
                </div>
                </>
                )}
                
            </div>
        </div>
        
        <RowMovie rowId={1} title={'Upcoming'} fetch={'upcoming'} />
        <RowMovie rowId={2} title={'Now Showing'} fetch={'now_playing'} />
        <RowMovie rowId={3} title={'Top Rated'} fetch={'top_rated'} />
        </>
    )
}

export default Detail
