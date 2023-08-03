function Passion() {
  return (
    <div
      id="Passions"
      className="flex flex-col items-center pt-[30px] gap-[35px] pb-[30px]"
    >
      <div className="text-[30px] text-[#14279B]">
        Additional <span className="text-[#002265] font-[500]">passions</span>
      </div>
      <div className="flex text-[25px] gap-[50px]">
        <div className="flex flex-col items-center w-[347px] h-[266px] border-[1px] rounded-[13px] p-[15px] bg-[#FFF] shadow-xl">
          <div>
            <img src="./Front end Dev.png" />
          </div>
          <div>
            <span className="font-[700]">Front-End</span> Developer
          </div>
          <div className="text-[18px]">(Sase, Bootstrap, Tailwind)</div>
        </div>
        <div className="flex flex-col items-center w-[347px] h-[266px] border-[1px] rounded-[13px] p-[15px] bg-[#FFF] shadow-xl">
          <div>
            <img src="./Back-End.png" />
          </div>
          <div>
            <span className="font-[700]">Back-End</span> Developer
          </div>
          <div className="text-[18px]">(Node.js, Laravel, Codeigniter)</div>
        </div>
        <div className="flex flex-col items-center w-[347px] h-[266px] border-[1px] rounded-[13px] p-[15px] bg-[#FFF] shadow-xl">
          <div>
            <img src="./UI-UX.png" />
          </div>
          <div>
            <span className="font-[700]">UI/UX</span> Designer
          </div>
          <div className="text-[18px]">(Figma, Zeplin, Adobe XD)</div>
        </div>
      </div>
    </div>
  );
}

export default Passion;
