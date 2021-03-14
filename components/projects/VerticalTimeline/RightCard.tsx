import ProjectCard from './ProjectCard'

// export interface IProps {
//     index: number,
//     image: string,
//     title: string,
//     day: number,
//     demo: string,
//     blog: string,
//     inspiration: string,
//     github: string,
//     project: boolean
// }
// export default function RightCard({ index, image, title, day, demo, blog, inspiration, github, project }: IProps) {

export default function RightCard(project) {
    return (
        // right
        < div className="flex md:contents" >
            <div className="md:col-start-5 md:col-end-6 mr-2 md:mr-10 md:mx-auto relative">
                <div className="h-full w-14 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none" />
                </div>
                <div className="w-14 h-14 absolute top-1/2 -mt-3 rounded-full bg-gray-600 text-white text-center shadow">
                    <a id={`project${project.id}`} />
                    <div className="animate animate-wiggle flex flex-col">
                        <p>Day</p>
                        <p>{project.day}</p>
                    </div>
                </div>
            </div>
            <article className="md:col-start-6 md:col-end-10 p-4 rounded-xl my-4 mr-auto">
                <ProjectCard
                    {...project}
                    // index={index}
                    // image={image}
                    // title={title}
                    // demo={demo}
                    // blog={blog}
                    // inspiration={inspiration}
                    // github={github}
                    // project={project}
                />
            </article>
        </div >
    )
}