import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div
          className="flex mx-auto px-5 w-full justify-between text-2xl text-white/50
           bg-black/30 h-[75px] backdrop-blur-1.5xl rounded-full max-w-[460px] items-center"
        >
          {/* About*/}
          <Link
            to="/"
            className="flex cursor-pointer w-[60px] h-[60px] items-center justify-center"
          >
            <BiHomeAlt className="transform transition-transform hover:scale-150 hover:text-[#F2B705] {}" />
          </Link>
          {/* Portfolio */}
          <Link
            to="/postfolio"
            className="flex cursor-pointer w-[60px] h-[60px] items-center  justify-center"
          >
            <BiUser className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
          </Link>
          {/* Farewell */}
          <Link
            to="/farewell"
            className="flex cursor-pointer w-[60px] h-[60px] items-center  justify-center"
          >
            <FaPhotoVideo className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
          </Link>
          {/* */}
          <Link
            to="/"
            className="flex cursor-pointer w-[60px] h-[60px] items-center  justify-center"
          >
            <BsBriefcase className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
          </Link>
          {/*  */}
          <Link
            to="/"
            className="flex cursor-pointer w-[60px] h-[60px] items-center  justify-center"
          >
            <BsChatSquare className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
