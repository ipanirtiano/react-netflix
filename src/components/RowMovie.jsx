/* eslint-disable react/prop-types */
import { useStateProvider } from "../utils/StateProvider";
import { actions } from "../utils/Constans";
import { options } from "../request";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Modal from "./Modal";


const RowMovie = ({rowId, title, fetch}) => {
    const [{getMovieUpcoming, getMovieNowPlaying, getMovieTopRated, getMoviePopular}, dispatch] = useStateProvider()
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const getListMovie = async () => {
            const dataMovies = await axios.get(`https://api.themoviedb.org/3/movie/${fetch}`, options)
            .then(response => response.data.results)
            //dispatch data getmovie list
            if(fetch === 'now_playing'){
                dispatch({type: actions.GET_MOVIE_NOW_SHOWING, dataMovies})
            }else if(fetch === 'top_rated'){
                dispatch({type: actions.GET_MOVIE_TOP_RATED, dataMovies}) 
            }else if(fetch === 'upcoming'){
                dispatch({type: actions.GET_MOVIE_UPCOMING, dataMovies}) 
            }else if(fetch === 'popular'){
                dispatch({type: actions.GET_MOVIE_POPULAR, dataMovies}) 
            }
        }
        getListMovie()
    }, [dispatch])

    // slide left
    const sliderLeft = () => {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    // slide right
    const sliderRight = () => {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    // handle modal click
    const handleClick = (data) => {
        // genre detail movie
        const genreId = data.genre_ids[data.genre_ids.length -1]
        // dispatch movie detail
        dispatch({type: actions.GET_MOVIE_DETAIL, data}) 
        setModal(true)

        // handle get trailer
        const getTrailer = async () => {
            const trailer = await axios.get(`https://api.themoviedb.org/3/movie/${data.id}/videos`, options)
            .then(response => response.data.results.find(vid => vid.type == 'Trailer'))
            dispatch({type: actions.GET_MOVIE_TRAILER, trailer})
        }

        const getGenre = async () => {
            const genre = await axios.get('https://api.themoviedb.org/3/genre/movie/list', options)
            .then(response => response.data.genres.find(genre => genre.id == genreId))
            dispatch({type: actions.GET_MOVIE_GENRES, genre})
        }

    getGenre()    
    getTrailer() 
    }

    // handle close modal
    const closeModal = () => {
        setModal(false)
    }


    return (
        <>
            <h2 className="text-white font-semibold md:text-xl pt-4 pl-4" id={title}>{title}</h2>

            <div className="relative flex items-center group pl-4">
            <span className="material-symbols-outlined absolute text-white text-2xl md:text-3xl left-4 z-[10] w-[50px] h-full  items-center justify-center pl-[5px] hidden group-hover:flex cursor-pointer" onClick={sliderLeft}>arrow_back_ios</span>

                <div id={'slider' + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">   
                    { fetch === 'upcoming' ?
                    getMovieUpcoming ? getMovieUpcoming.map((movie, i) => {
                        return(
                            <Movie data={movie} key={i} handleClick={handleClick}/> 
                        )
                    }) : '' : ''}


                    { fetch === 'now_playing' ?
                    getMovieNowPlaying ? getMovieNowPlaying.map((movie, i) => {
                        return(
                            <Movie data={movie} key={i} handleClick={handleClick}/> 
                        )
                    }) : '' : ''}


                    { fetch === 'top_rated' ?
                    getMovieTopRated ? getMovieTopRated.map((movie, i) => {
                        return(
                            <Movie data={movie} key={i} handleClick={handleClick}/> 
                        )
                    }) : '' : ''}



                    { fetch === 'popular' ?
                    getMoviePopular ? getMoviePopular.map((movie, i) => {
                        return(
                            <Movie data={movie} key={i} handleClick={handleClick}/> 
                        )
                    }) : '' : ''}
                </div>
                <span className="material-symbols-outlined absolute text-white text-2xl md:text-3xl right-0 z-[10] w-[50px] h-full  items-center justify-center pl-[5px] hidden group-hover:flex cursor-pointer" onClick={sliderRight}>arrow_forward_ios</span>
            </div>


            <Modal visible={modal} close={closeModal} />
        </>
    )
}

export default RowMovie
