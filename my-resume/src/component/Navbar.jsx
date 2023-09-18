function Navbar() {
  return (
    <div className="flex justify-between text-[35px] w-[70%] h-[100px] p-0">
      <div>Resume</div>
      <div className="flex items-center text-[#212121] font-[400] gap-[50px] pb-[40px]">
        <a
          href="#About"
          className="hover:bg-[#608AF5] hover:text-white px-[15px] py-[6px] rounded-[10px]"
        >
          About
        </a>
        <a
          href="#Passions"
          className="hover:bg-[#608AF5] hover:text-white px-[15px] py-[6px] rounded-[10px]"
        >
          Passion
        </a>
        <a
          href="#Portfolio"
          className="hover:bg-[#608AF5] hover:text-white px-[15px] py-[6px] rounded-[10px]"
        >
          Portfolio
        </a>
        <a
          href="#Contact"
          className="flex justify-center items-center hover:bg-[#608AF5] hover:text-white px-[15px] py-[6px] rounded-[10px]"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
