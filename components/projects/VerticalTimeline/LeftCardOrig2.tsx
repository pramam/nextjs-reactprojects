import ProjectCardOrig2 from './ProjectCardOrig2'

export default function LeftCardOrig2({ demo, blog, inspiration, github }) {
    const text = "text-sm text-gray-400 uppercase mr-3"
    const textgray = "text-sm text-gray-300 uppercase mr-3 cursor-not-allowed"

    return (
        <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                {/* <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                    quaerat?
        </p>
                <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">index. title</div>
                <div className="bg-gray-50 flex flex-row flex-wrap justify-center">
                    <a href="" className={demo ? text : textgray} >Demo</a>
                    <a href="" className={blog ? text : textgray}>Blog</a>
                    <a href="" className={inspiration ? text : textgray}>Inspiration</a>
                    <a href="" className={github ? text : textgray}>Github</a>
                </div> */}
                <ProjectCardOrig2
                    demo=""
                    blog=""
                    inspiration=""
                    github=""
                />
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-red-800 pointer-events-none" />
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow" />
            </div>
        </div>

    )
}