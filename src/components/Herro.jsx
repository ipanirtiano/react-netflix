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
            <div className="w-full h-[380px] md:h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[380px] md:h-[550px] bg-gradient-to-r from-black"></div>
                <img className="object-cover w-full h-full" src={`https://image.tmdb.org/t/p/original/${movieBanner?.backdrop_path}`} alt={movieBanner?.title} />
                <div className="absolute w-full md:top-[10%] top-[100px] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">{movieBanner?.title}</h1>
                <div className="my-4">
                    <button className=" bg-gray-300 text-black border-gray-300 py-2 px-5 hover:bg-red-600 hover:text-gray-300 transition-all">Play</button>
                    <button className="border text-white ml-4 border-gray-300 py-2 px-5">Watch Later</button>
                </div>
                <p className="text-gray-400 text-sm mb-1">Relased: {movieBanner?.release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movieBanner?.overview, 180)}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Herro
