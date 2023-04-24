// Navigste do not use router
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare, BsCamera } from "react-icons/bs";

function Nav({ setActiveContent }) {
  const handleClick = (content) => {
    setActiveContent(content);
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div
          className="flex mx-auto px-5 w-full justify-between text-2xl text-white/50
           bg-black/30 h-[75px] backdrop-blur-1.5xl rounded-full max-w-[460px] items-center"
        >
          {/* About*/}
          <div
            onClick={() => handleClick("about")}
            className="flex cursor-pointer w-[60px] h-[60px] items-center justify-center"
          >
            <BiHomeAlt className="transform transition-transform hover:scale-150 hover:text-[#F2B705] {}" />
          </div>
          {/* Portfolio */}
          <div
            onClick={() => handleClick("portfolio")}
            className="flex cursor-pointer w-[60px] h-[60px] items-center  justify-center"
          >
            <BiUser className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
          </div>
          {/* Album */}
          <div
            onClick={() => handleClick("")}
            className="flex cursor-pointer w-[60px] h-[60px] items-center  justify-center"
          >
            <BsCamera className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
          </div>
          {/* */}
          <div
            onClick={() => handleClick("")}
            className="flex cursor-pointer w-[60px] h-[60px] items-center  justify-center"
          >
            <BsBriefcase className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
          </div>
          {/*  */}
          <div
            onClick={() => handleClick("")}
            className="flex cursor-pointer w-[60px] h-[60px] items-center  justify-center"
          >
            <BsChatSquare className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
