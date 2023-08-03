function Navbar() {
  return (
    <div className="flex justify-between text-[35px] w-[70%]">
      <div>Resume</div>
      <div className="flex text-[#212121] font-[400] gap-[50px] pb-[40px]">
        <a href="#About">About</a>
        <a href="#Passions">Passion</a>
        <a href="#Portfolio">Portfolio</a>
        <a
          href="#Contact"
          className="bg-[#608AF5] text-[#FFF] rounded-[10px] px-[15px] py-[10px]"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
