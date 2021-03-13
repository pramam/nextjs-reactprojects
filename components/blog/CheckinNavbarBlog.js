import { getProjectData } from '../../utils/getProjectData'


// Display <INSPIRATION> <DEMO> <GITHUB> in blog post for whichever links are available

export default function CheckinNavbarBlog({ projectId, textColor }) {
    const projectData = getProjectData(projectId, true)
    const { status, checkins, timetocomplete } = projectData;
    if (status != "OK")
        console.log(`${projectId}:  status: ${status}`)

    const text = `text-sm uppercase text-center ${textColor} mr-3`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"
    // const chevronCss = `mt-1 h-4 w-4 text-center ${textColor}`
    // const chevronCssGray = `mt-1 h-4 w-4 text-gray-500 text-center cursor-not-allowed`

    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row justify-center">
                    <div className={text}>Checkins: {checkins}</div>
                    <div className={text}>Time to complete: {timetocomplete}</div>
                    {/* <a href={inspiration} className="ml-3">
                        <div className={inspiration ? text : textgray}>Inspiration</div>
                    </a>
                    <a href={url} className="ml-3">
                        <div className={url ? text : textgray}>Demo</div>
                    </a>
                    <a href={githubUrl} className="ml-3">
                        <div className={githubUrl ? text : textgray}>Github</div>
                    </a> */}

                    {/* <li className="flex ml-3 mr-3 no-underline font-semibold">
                        {isProject ?
                            <div className={text}>Blog for Project {projectNum}</div>
                            :
                            <div className={text}>Blog</div>
                        }
                    </li> */}
                    {/* <a href={about} className="mr-3">
                        <div className={about ? text : textgray}>About</div>
                    </a> */}
                    {/* <a href={nextProjectUrl}>
                        <li className="flex flex-col">
                            <SVGChevronRight css={nextProjectUrl ? chevronCss : chevronCssGray} />
                        </li>
                    </a> */}
                </div>
            </div>
        </div >
    )

}