import React from 'react'

const About = () => {
    return (
        <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12">
                <div className=" text-white w-2/3 font-semibold text-[32px]">
                    <div className="">
                        <span className="text-[#C778DD]">/</span>
                        about-me
                    </div>
                    <div className=" text-white text-base font-normal mt-[14px]">
                        Who am I?
                    </div>
                </div>
            </div>
            <div className=" flex-wrap flex items-center justify-between">
                {/* left */}
                <div className="md:w-[48%] w-full">
                    {/* disc */}
                    <p className="text-[#ABB2BF] ">
                        Hello, i’m Arsene!
                        <br />
                        <br />
                        My journey as a developer began with a curiosity for technology and a desire to create impactful software. I possess a solid foundation in various programming languages such as the ones listed below, allowing me to adapt quickly to different tech stacks.
                        Throughout my career, I have actively participated in the entire software development lifecycle, from conceptualization and design to implementation and testing. I enjoy collaborating with cross-functional teams, brainstorming ideas, and providing valuable insights to deliver high-quality products.



                        <br />
                        <br />
                        Beyond writing clean and maintainable code, I believe in building software that truly enhances the user experience. I pay attention to detail, ensuring intuitive interfaces and seamless interactions. By prioritizing user needs and feedback, I strive to create software that not only meets expectations but also exceeds them.

As a team player, I actively foster a collaborative and supportive work environment. I value open communication, encourage knowledge sharing, and embrace constructive feedback. Working together as a cohesive unit, we can achieve remarkable results and drive innovation.
                    </p>
                </div>
                {/* right */}
                <div className=" mx-auto">
                    <img className="mx-auto" src={require("./imgs/Untitled (2) 1.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About