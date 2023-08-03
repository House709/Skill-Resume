function About() {
  return (
    <div id="About" className="flex flex-col justify-center gap-[25px]">
      <div className="Contact flex gap-[50px] pl-[30px]">
        <div>
          <img src="./Ning.jpeg" className="rounded-[50px]" width={320} />
        </div>
        <div className="flex flex-col text-[20px] gap-[15px]">
          <div className="pb-[15px] text-[24px]">Phiraphat Chaikla</div>
          <div className="text-[24px]">Font-End Developer</div>
          <div className="flex gap-[10px]">
            <div>
              <img src="./phone-call.png" width={25} />
            </div>
            <div>084-585-6227</div>
          </div>
          <div className="flex gap-[10px]">
            <div>
              <img src="./email.png" width={25} />
            </div>
            <div>Peeraput.jaikla@gmail.com</div>
          </div>
          <div className="flex gap-[10px]">
            <div>
              <img src="./home.png" width={25} />
            </div>
            <div className="">254/1, Yuan, Chaingkham, Phayao, 56110</div>
          </div>
        </div>
      </div>
      <hr />
      <div id="Summary" className=" flex gap-[83px]">
        <div className="text-[30px] text-[#002265] font-[500]">Summary</div>
        <div className="text-[22px]">
          ชื่อ นาย พีรพัฒน์ ใจกล้า สามารถทำงาน font-end
          <br /> จุดเด่น คือ สามารถศึกษาเรื่องใหม่ๆได้เสมอ ทำงานตรงเวลา
          ทำงานร่วมกับผู้อื่นได้
        </div>
      </div>
      <hr />
      <div id="Work-Experience" className="Work flex gap-[90px]">
        <div className="text-[30px] text-[#002265] font-[500]">
          Work <br />
          Experince
        </div>
        <div className="text-[22px]">ยังไม่มีประสบการณ์ทำงาน</div>
      </div>
      <hr />
      <div id="Education" className=" flex gap-[90px]">
        <div className="text-[30px] text-[#002265] font-[500]">Education</div>
        <div className="text-[22px]">
          2018-2022: คณะวิทยาศาสตร์ สาขาคณิตศาสตร์ มหาวิทยาลัยเชียงใหม่ <br />
          2012-2018: โรงเรียนเชียงคำวิทยาคม
        </div>
      </div>
      <hr />
      <div id="Skills" className=" flex gap-[165px]">
        <div className="text-[30px] text-[#002265] font-[500]">Skills</div>
        <div className="text-[22px]">
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Eng: B1</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
