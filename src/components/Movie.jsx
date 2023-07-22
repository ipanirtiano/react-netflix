/* eslint-disable react/prop-types */


const Movie = ({data, handleClick}) => {

    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str;
        }
    }
    
    return (
        <>
        <div className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 h-[140px] sm:h-[150px] md:h-[180px] lg:h-[200px]" onClick={() => handleClick(data)}>
            <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.title} />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white flex justify-center items-center flex-col ">
                <button className="text-black p-2 bg-gray-300/80 backdrop-blur-xl text-xs">Watch Trailer</button>
            </div>
            <p className="white-space-normal text-xs md:text-sm md:font-semibold absolute bottom-[15px] left-0 px-2 text-white">{truncateString(data.title, 20)}</p>
            <p className="white-space-normal text-xs absolute bottom-0 left-0 px-2 text-gray-300">Released: {data.release_date}</p>
        </div>
        </>
    )
}

export default Movie
