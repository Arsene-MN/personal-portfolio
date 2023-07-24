import React from 'react'
// imgs
import first from "./imgs/uncinq.png";
import second from "./imgs/Weather Widget 1.png";
import third from "./imgs/Untitled.png";
import Project_card from '../project_card/Project_card';

const Complete_apps = () => {
    const projects = [

        {
            // get img from img folder
            img: first,
            langs: ["html", "css", "PHP", "react", "tailwind"],
            title: "UNCINQ",
            disc: "Your partner in digital transformation ",
        },
        {
            img: second,
            langs: ["html", "css", "react", "Node.js"],
            title: "Cloudia",
            disc: "Weather App",
        },
        {
            img: third,
            langs: ["html", "tailwind", "react", "Node.js"],
            title: "Bourbon coffee shop",
            disc: "Website for Bourbon coffee shop ",
        },

    ];
    return (
        <div>
            <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
                {/* top / title */}
                <div className="">
                    {/* projects */}
                    <div className=" text-white font-bold text-[32px]">
                        <span className=" text-[#C778DD]">/</span>
                        <span>projects</span>
                    </div>
                    {/* list */}
                    <div className=" text-white mt-[14px]">List of my projects</div>
                </div>
                {/* completed tasks */}
                <div className="">
                    {/* title */}
                    <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                        <span className=" text-[#C778DD]">#</span>
                        <span>complete-apps</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
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
            </div>
        </div>
    )
}

export default Complete_apps