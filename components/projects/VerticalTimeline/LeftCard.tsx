import ProjectCard from "./ProjectCard";

// project is an entry in allprojects.json
export default function LeftCard(project) {
    return (
        // left
        <div className="flex flex-row-reverse md:contents" >
            <article className="md:col-start-1 md:col-end-5 p-4 rounded-xl my-4 ml-auto">
                <ProjectCard {...project} />
            </article>
            <div className="md:col-start-5 md:col-end-6 md:mx-auto relative mr-2 md:mr-10">
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
        </div >
    )
}