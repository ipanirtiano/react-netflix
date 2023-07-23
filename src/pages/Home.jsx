/* eslint-disable no-unused-vars */
import Herro from "../components/Herro"
import Navbar from "../components/Navbar"
import RowMovie from "../components/RowMovie"
import { useEffect } from "react"
import axios from "axios"
import { useStateProvider } from "../utils/StateProvider"
import { actions } from "../utils/Constans"
import { options } from "../request"


const Home = () => {
    const [{getMovieBanner}, dispatch] = useStateProvider()

    // dispatch banner movie random for the first page
    useEffect(() => {
        const getListMovie = async () => {
            const dataMovies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, options)
            .then(response => response.data.results)
            //dispatch data getmovie list
            dispatch({type: actions.GET_MOVIE_BANNER, dataMovies})
        }
        getListMovie()
    },[dispatch])


    return (
        <>
            <Navbar />
            <Herro />
            {/* row of the movie */}
            <RowMovie rowId={1} title={'Upcoming'} fetch={'upcoming'} />
            <RowMovie rowId={2} title={'Now Showing'} fetch={'now_playing'} />
            <RowMovie rowId={3} title={'Top Rated'} fetch={'top_rated'} />
        </>
    )
}

export default Home
