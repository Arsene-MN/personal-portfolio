import "./about.css";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div data-aos="fade-right" className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Hello I'm a <span className="text-[#C778DD]">Web</span> and{" "}
            <span className="text-[#C778DD]">Software developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            I craft professional and attractive web and mobile apps where technologies meet creativity.I have a strong passion for full-stack development and exploring the intersection of artificial intelligence and human-computer interactions.
          </p>
        </div>
        <div  data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="">
            <img src={require("./imgs/Group 53 1.png")} alt="" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              This is my <span className="text-white">Portfolio</span>
            </div>
          </div>
        </div>
      </div>
      <div  data-aos="fade-up" className=" px-5 py-10">
        <img className="mx-auto" src={require("./imgs/quote.png")} alt="" />
      </div>
    </>
  );
};

export default About;
