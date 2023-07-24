import React from 'react'

const Small_projects = () => {
    // we need to create some dates for this, you can do it by yourselves
    // we need about 8 projects, but you can add all yours :)
    // in this video we will create about page
    let projects = [
        {
            languages: ["React", "Firebase", "Tailwind"],
            title: "Job Portal app",
            body: 'Find jobs easily'
        },
        {
            languages: ["REACT", "Js", "Nodejs"],
            title: "My blog",
            body: 'Frontend and backend of my blog website written in node'
        },
        {
            languages: ["HTML", "CSS", "JS"],
            title: "Connect 4our",
            body: 'Classic game to play with your friends'
        },
        {
            languages: ["React", "CSS", "Nextjs"],
            title: "Food ordering menu",
            body: 'An easily updatable restaurant or hotel menu which can be integrated with my recipe app'
        },
        {
            languages: ["React", "CSS", "Tailwind"],
            title: "Expense tracker",
            body: 'Track the rate at which you are spending your cash'
        },
        {
            languages: ["React", "Tailwind", "API"],
            title: "Github Repo Search App",
            body: 'Search for git repositories with this app'
        },
        {
            languages: ["Tailwind", "React", "HTML"],
            title: "Recipe Maker App",
            body: 'Make recipes and save them the using this app'
        },
        {
            languages: ["HTML", "CSS", "React"],
            title: "Contact App",
            body: 'Keeping contacts made easy'
        },
    ]
    // you will write dates by yourselves
    return (
        <div className=' pt-[80px] px-5 max-w-[1560px] mx-auto'>
            {/* title */}
            <div className="">
                <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                    <span className=" text-[#C778DD]">#</span>
                    <span>small-projects</span>
                </div>
            </div>
            {/* body/cards */}
            <div className="cards flex justify-center flex-wrap gap-4">
                {
                    // mapping
                    projects.map(e => {
                        let { languages, title, body } = e
                        return <>
                            {/* card */}
                            <div className="card max-w-[331px] w-full border border-[#ABB2BF]">
                                {/* skills */}
                                <div className=" border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                                    {languages.map(lang => {
                                        return <span>{lang} </span>
                                    })}
                                </div>
                                {/* discription */}
                                <div className="disc p-4">
                                    <h2 className=' text-white font-medium text-2xl'>{title}</h2>
                                    <p className=' text-[#ABB2BF] py-4'>{body}</p>
                                    {/* we are only coders so maybe no one have figma projects */}
                                    <button className=' border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
                                        <a href="https://github.com/Arsene-MN/">Github {'<'}~{'>'}</a>
                                    </button>
                                </div>
                            </div></>
                    })
                }
            </div>
        </div>
    )
}

export default Small_projects