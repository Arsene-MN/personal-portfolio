const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div  data-aos = "fade-right" className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              Hello, I’m Arsene!
              <br />
              <br />
              I’m a software developer. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences. I can also develop large systems as well as mobile apps.
              <br />
              <br />
              Transforming my creativity and knowledge into software has been
              my passion for some time. I have been helping various clients to
              establish their presence online. I also strive to learn about
              the newest technologies.
            </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="#"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
              >
              </a>
            </div>
          </div>
          {/* right */}
          <div  data-aos = "fade-left" className=" mx-auto">
            <img className="mx-auto" src={require("./imgs/Group 53 1.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
