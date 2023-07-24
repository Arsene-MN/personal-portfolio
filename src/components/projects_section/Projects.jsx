import Project_card from "../project_card/Project_card";
import first from "./imgs/uncinq.png";
import second from "./imgs/Untitled.png";
import third from "./imgs/Weather Widget 1.png";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["html", "css", "react", "tailwind", "PHP"],
      title: "UNCINQ",
      disc: "Your partner in web and app development",
    },
    {
      img: second,
      langs: ["html", "tailwind", "react", "Node.js"],
      title: "Bourbon coffee shop",
      link:"uncinq.com",
      disc: "Website for Bourbon coffee shop",
    },
    {
      img: third,
      langs: ["html", "css", "react", "tailwind.css", "rest.api"],
      title: "Cloudia",
      disc: "Weather forecast web app",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="./projects">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
