import { useStateProvider } from "../utils/StateProvider";
import { actions } from "../utils/Constans";
import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import { options } from "../request";

const Herro = () => {
  const [{ getMovieBanner }, dispatch] = useStateProvider();
  const [modal, setModal] = useState(false);
  const movieBanner =
    getMovieBanner[Math.floor(Math.random() * getMovieBanner.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  // handle modal click
  const handleClick = (data) => {
    // genre detail movie
    const genreId = data.genre_ids[data.genre_ids.length - 1];
    // dispatch movie detail
    dispatch({ type: actions.GET_MOVIE_DETAIL, data });
    setModal(true);

    // handle get trailer
    const getTrailer = async () => {
      const trailer = await axios
        .get(`https://api.themoviedb.org/3/movie/${data.id}/videos`, options)
        .then((response) =>
          response.data.results.find((vid) => vid.type == "Trailer")
        );
      dispatch({ type: actions.GET_MOVIE_TRAILER, trailer });
    };

    const getGenre = async () => {
      const genre = await axios
        .get("https://api.themoviedb.org/3/genre/movie/list", options)
        .then((response) =>
          response.data.genres.find((genre) => genre.id == genreId)
        );
      dispatch({ type: actions.GET_MOVIE_GENRES, genre });
    };

    getGenre();
    getTrailer();
  };

  // handle close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="w-full h-[400px] md:h-[550px] text-white font-semibold">
        <div className="w-full h-full">
          <div className="absolute w-full h-[400px] md:h-[550px] bg-gradient-to-b"></div>

          <img
            className="object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/original/${movieBanner?.backdrop_path}`}
            alt={movieBanner?.title}
          />

          <div className="absolute w-full md:top-[20%] top-[100px] p-4 md:p-6">
            <h1 className="text-2xl md:text-5xl">{movieBanner?.title}</h1>

            <div className="my-4 flex spax-2 font-thin">
              <button className="py-2 px-3 bg-red-600 hover:text-gray-300 transition-all flex items-center text-base">
                <span className="material-symbols-outlined mr-1">
                  play_circle
                </span>{" "}
                Play
              </button>

              <button
                className="border text-white ml-4 border-gray-300 py-2 px-5 flex items-center"
                onClick={() => handleClick(movieBanner)}
              >
                <span className="material-symbols-outlined mr-1">info</span>More
                Info
              </button>
            </div>

            <p className="text-gray-300 mb-1 text-xs md:text-base font-normal">
              Relased: {movieBanner?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white text-xs md:text-lg font-normal">
              {truncateString(movieBanner?.overview, 180)}
            </p>
          </div>
        </div>
      </div>

      <Modal visible={modal} close={closeModal} />
    </>
  );
};

export default Herro;
