import Herro from "../components/Herro"
import Navbar from "../components/Navbar"
import RowMovie from "../components/RowMovie"


const Home = () => {
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
