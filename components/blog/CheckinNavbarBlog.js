import { getProjectData } from '../../utils/getProjectData'


// Display <CHECKINS:> <TIME TO COMPLETE:> in blog post

export default function CheckinNavbarBlog({ projectId, textColor }) {
    const projectData = getProjectData(projectId, true)
    const { status, checkins, timetocomplete } = projectData;
    if (status != "OK")
        console.log(`${projectId}:  status: ${status}`)

    const text = `text-sm uppercase text-center ${textColor} mr-3`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"

    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row justify-center">
                    <div className={text}>Checkins: {checkins}</div>
                    <div className={text}>Time to complete: {timetocomplete}</div>
                </div>
            </div>
        </div >
    )

}