function Portfolio() {
  return (
    <div
      id="Portfolio"
      className="flex flex-col items-center pt-[30px] gap-[35px] pb-[30px]"
    >
      <div className="text-[30px] text-[#14279B]">
        My <span className="text-[#002265] font-[500]">Portfolio</span>
      </div>
      <div className="flex text-[25px] gap-[50px]">
        <div className="flex flex-col items-center w-[347px] h-[266px] border-[1px] rounded-[13px] p-[15px] bg-[#FFF] shadow-xl">
          <img src="./Product-Cart.png" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
