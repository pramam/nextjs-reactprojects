export default function ProjectCardOrig2({ demo, blog, inspiration, github }) {
    const text = "text-sm text-gray-400 uppercase mr-3"
    const textgray = "text-sm text-gray-300 uppercase mr-3 cursor-not-allowed"

    return (
        <>
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
        </p>
            <div className="max-w-4/6 sm:max-w-4/5">
                <img
                    className="w-full h-64 object-cover flex rounded-t-md justify-center items-center"
                    src="/screenshots/Screenshot-Accordion.png"
                    alt="Test photo"
                />
            </div>
            <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">index. title</div>
            <div className="bg-gray-50 flex flex-row flex-wrap justify-center">
                <a href="" className={demo ? text : textgray} >Demo</a>
                <a href="" className={blog ? text : textgray}>Blog</a>
                <a href="" className={inspiration ? text : textgray}>Inspiration</a>
                <a href="" className={github ? text : textgray}>Github</a>
            </div>
        </>
    )
}