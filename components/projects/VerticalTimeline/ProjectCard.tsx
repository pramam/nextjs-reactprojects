export interface IProps {
    index: number,
    image: string,
    title: string,
    //    day: number,
    demo: string,
    blog: string,
    inspiration: string,
    github: string
}

export default function ProjectCard({ index, image, title, demo, blog, inspiration, github }: IProps) {
    return (
        <div className="mt-2 flex flex-col flex-shrink shadow-xl mx-4">
            <div className="max-w-28">
                <img
                    className="h-64 w-70 object-cover"
                    src={image}
                    alt={title} />
            </div>
            <div className="bg-gray-50">
                <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">{index}. {title}</div>
                <div className="bg-gray-50 flex flex-row justify-center">
                    <div className="text-sm text-gray-400 uppercase mr-3">Demo</div>
                    <div className="text-sm text-gray-400 uppercase mr-3">Blog</div>
                    <div className="text-sm text-gray-400 uppercase mr-3">Inspiration</div>
                    <div className="text-sm text-gray-400 uppercase mr-3">Github</div>
                </div>
            </div>
        </div>
    )
}