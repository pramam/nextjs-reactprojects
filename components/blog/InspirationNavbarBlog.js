import { getProjectData } from '../../utils/getProjectData'


// Display <INSPIRATION> <DEMO> <GITHUB> in blog post for whichever links are available

export default function InspirationNavbarBlog({ projectId, textColor }) {
    const projectData = getProjectData(projectId, true)
    const { status, isProject, url, inspiration, githubUrl, projectNum, timeline, about } = projectData;
    if (status != "OK")
    {
        console.log(`${projectId}:  status: ${status}`)
        return <>ProjectId {projectId} not found </>
    }

    const text = `text-sm uppercase text-center ${textColor}`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"

    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row justify-center">

                    <a href={inspiration} className="ml-3">
                        <div className={inspiration ? text : textgray}>Inspiration</div>
                    </a>
                    <a href={url} className="ml-3">
                        <div className={url ? text : textgray}>Demo</div>
                    </a>
                    <a href={githubUrl} className="ml-3">
                        <div className={githubUrl ? text : textgray}>Github</div>
                    </a>
                </div>
            </div>
        </div >
    )

}