import { useEffect } from "react"
import { useStateProvider } from "../utils/StateProvider"
import { actions } from "../utils/Constans"
import axios from "axios"
import { options } from "../request"

const Herro = () => {
    const [{getMovieBanner}, dispatch] = useStateProvider()
    const movieBanner = getMovieBanner[Math.floor(Math.random() * getMovieBanner.length)]

    useEffect(() => {
        const getListMovie = async () => {
            const dataMovies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, options)
            .then(response => response.data.results)
            //dispatch data getmovie list
            dispatch({type: actions.GET_MOVIE_BANNER, dataMovies})
        }
        getListMovie()
    },[dispatch])


    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str;
        }
    }

    return (
        <>
            <div className="w-full h-[400px] md:h-[550px] text-white font-semibold">

            <div className="w-full h-full">
                <div className="absolute w-full h-[400px] md:h-[550px] bg-gradient-to-r from-black"></div>

                <img className="object-cover w-full h-full" src={`https://image.tmdb.org/t/p/original/${movieBanner?.backdrop_path}`} alt={movieBanner?.title} />

                <div className="absolute w-full md:top-[20%] top-[100px] p-4 md:p-6">
                    <h1 className="text-2xl md:text-5xl">{movieBanner?.title}</h1>

                <div className="my-4 flex spax-2 font-thin">
                    <button className="py-2 px-3 bg-red-600 hover:text-gray-300 transition-all flex items-center text-base"><span className="material-symbols-outlined mr-1">play_circle</span> Play</button>

                    <button className="border text-white ml-4 border-gray-300 py-2 px-5 flex items-center"><span className="material-symbols-outlined mr-1">info</span>More Info</button>
                </div>

                <p className="text-gray-400 mb-1 text-xs md:text-base font-thin">Relased: {movieBanner?.release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-xs md:text-lg font-thin">{truncateString(movieBanner?.overview, 180)}</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Herro
