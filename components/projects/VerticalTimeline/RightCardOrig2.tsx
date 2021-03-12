import ProjectCardOrig2 from "./ProjectCardOrig2"

export default function RightCardOrig2({ demo, blog, inspiration, github }) {
    const text = "text-sm text-gray-400 uppercase mr-3"
    const textgray = "text-sm text-gray-300 uppercase mr-3 cursor-not-allowed"
    return (
        <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-blue-800 pointer-events-none" />
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
            </div>
            <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                {/* <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae, facilis.
        </p>
                <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">index. title</div>
                <div className="bg-gray-50 flex flex-row flex-wrap justify-center">
                    <a href="" className={demo ? text : textgray} >Demo</a>
                    <a href="" className={blog ? text : textgray}>Blog</a>
                    <a href="" className={inspiration ? text : textgray}>Inspiration</a>
                    <a href="" className={github ? text : textgray}>Github</a>
                </div> */}
                <ProjectCardOrig2
                    blog=""
                    demo=""
                    inspiration=""
                    github=""
                />
            </div>
        </div>
    )
}