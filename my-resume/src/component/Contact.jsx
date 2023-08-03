function Contact() {
  return (
    <div
      id="Contact"
      className="flex flex-col items-center pt-[30px] gap-[35px]"
    >
      <div className="text-[30px] text-[#14279B]">
        Contact <span className="text-[#002265] font-[500]">Me</span>
      </div>
      <div className="flex text-[25px] gap-[50px]">
        <div>
          <a href="https://github.com/House709" target="_blank">
            <img src="./Git.png" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/ningpeerapat/" target="_blank">
            <img src="./Instagram.png" />
          </a>
        </div>
        <div>
          <a href="mailto:peeraut.jaikla@gmail.com">
            <img src="./Email (1).png" />
          </a>
        </div>
        <div>
          <a href="#About">
            <img src="./telpon.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
