import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIscrolled(true);
      } else {
        setIscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-black/70 backdrop-blur-lg"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain w-[60px] md:w-[80px]"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
        </ul>
      </div>

      <div className="flex space-x-4 text-sm font-light h-full">
        <button className="">Sign In</button>
        <button className="bg-red-600 py-2 px-4 hidden md:block">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
