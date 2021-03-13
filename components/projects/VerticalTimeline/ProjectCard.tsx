import Link from 'next/link'

export interface IProps {
    index: number,
    image: string,
    title: string,
    demo: string,
    blog: string,
    inspiration: string,
    github: string,
    project: boolean
}

export default function ProjectCard({ index, image, title, demo, blog, inspiration, github, project }: IProps) {
    const text = "text-sm text-gray-400 uppercase mr-3"
    const textgray = "text-sm text-gray-300 uppercase mr-3 cursor-not-allowed"
    return (
        <div className="mt-2 flex flex-col flex-shrink shadow-xl mx-4">
            {/* Display a text card if not a project */}
            {project ?
            <div className="max-w-4/6 sm:max-w-4/5">
                <img
                    className="w-full h-64 object-cover flex justify-center items-center"
                    src={image}
                    alt={title}
                />
                </div> : ``}
            <div className="bg-gray-50">
                <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">
                    {project ? `${index}. ` : ``}{title}
                </div>
                <div className="bg-gray-50 flex flex-row flex-wrap justify-center">
                    <Link href={demo}>
                        <a className={demo ? text : textgray} >Demo</a>
                    </Link>
                    <Link href={blog}>
                        <a className={blog ? text : textgray}>Blog</a>
                    </Link>
                    <a href={inspiration} className={inspiration ? text : textgray}>Inspiration</a>
                    <a href={github} className={github ? text : textgray}>Github</a>
                </div>
            </div>
        </div>

    )
}