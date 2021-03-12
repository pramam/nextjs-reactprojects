import ProjectCardOrig2 from './ProjectCardOrig2'

export interface IProps {
    index: number,
    image: string,
    title: string,
    day: number,
    demo: string,
    blog: string,
    inspiration: string,
    github: string
}

export default function LeftCardOrig2({ index, image, title, day, demo, blog, inspiration, github }: IProps) {
    return (
        <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                <ProjectCardOrig2
                    index={index}
                    image={image}
                    title={title}
                    demo={demo}
                    blog={blog}
                    inspiration={inspiration}
                    github={github}
                />
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-14 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none" />
                </div>
                <div className="w-14 h-14 absolute top-1/2 -mt-3 rounded-full bg-gray-600 text-white text-center shadow">
                    <a id={`project${index}`} />
                    <div className="animate animate-wiggle flex flex-col">
                        <p>Day</p>
                        <p>{day}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}