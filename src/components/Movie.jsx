/* eslint-disable react/prop-types */


const Movie = ({data, handleClick}) => {
    return (
        <>
        <div className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-[5px]" onClick={() => handleClick(data)}>
            <img className="w-full h-auto block transition-all hover:scale-105" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.title} />
        </div>
        </>
    )
}

export default Movie
