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
        <div className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-[5px] h-[140px] sm:h-[150px] md:h-[180px] lg:h-[200px]" onClick={() => handleClick(data)}>
            <img className="w-full h-auto block transition-all hover:scale-105" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.title} />
            
            <p className="white-space-normal text-xs md:text-sm absolute bottom-[15px] left-0 px-[3px] text-white font-thin">{truncateString(data.title, 20)}</p>
            <p className="white-space-normal text-xs absolute bottom-0 left-0 px-[3px] text-gray-300 font-thin">Released: {data.release_date}</p>
        </div>
        </>
    )
}

export default Movie
