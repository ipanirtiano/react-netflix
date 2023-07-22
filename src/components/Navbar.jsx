
const Navbar = () => {

    return (
        <div className="flex items-center justify-between px-4 py-2 z-[100] absolute w-full top-0 left-0 right-0 navBar">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold cursor-pointer">NETFLIX</h1>
        <div>
            <button className="text-white pr-4 text-sm md:text-base">Sign In</button>
            <button className="bg-red-600 text-white md:px-6 md:py-4 cursor-pointer px-4 py-2 text-xs md:text-base">Sign Up</button>
        </div>
    </div>
    )
}

export default Navbar
