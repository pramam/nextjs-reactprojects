export interface IProps {
    index: number,
    image: string,
    title: string,
    demo: string,
    blog: string,
    inspiration: string,
    github: string
}

export default function ProjectCard({ index, image, title, demo, blog, inspiration, github }: IProps) {
    const text = "text-sm text-gray-400 uppercase mr-3"
    const textgray = "text-sm text-gray-300 uppercase mr-3 cursor-not-allowed"
    return (
        <div className="mt-2 flex flex-col flex-shrink shadow-xl mx-4">
            {/* <div className="max-w-28">
                <img
                    className="h-64 w-70 object-cover"
                    src={image}
                    alt={title} />
            </div> */}
            <div className="bg-gray-50">
                <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">{index}. {title}</div>
                <div className="bg-gray-50 flex flex-row justify-center">
                    <a href={demo} className={demo ? text : textgray} >Demo</a>
                    <a href={blog} className={blog ? text : textgray}>Blog</a>
                    <a href={inspiration} className={inspiration ? text : textgray}>Inspiration</a>
                    <a href={github} className={github ? text : textgray}>Github</a>
                </div>
            </div>
        </div>

    )
}