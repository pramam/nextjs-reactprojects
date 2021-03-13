import { getProjectData } from '../../utils/getProjectData'


// Display <TIMELINE> BLOG <ABOUT> without left and right arrows on Blog post

export default function ProjectNavbarBlog({ projectId, textColor }) {
    const projectData = getProjectData(projectId, true)
    const { status, isProject, projectNum, timeline, about } = projectData;
    if (status != "OK")
    {
        console.log(`${projectId}:  status: ${status}`)
        return <>ProjectId {projectId} not found </>
    }
        
    const text = `text-sm uppercase text-center ${textColor}`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"
    // const chevronCss = `mt-1 h-4 w-4 text-center ${textColor}`
    // const chevronCssGray = `mt-1 h-4 w-4 text-gray-500 text-center cursor-not-allowed`

    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row justify-center">

                    {/* <a href={prevProjectUrl}>
                        <li className="flex flex-col"
                        >
                            <SVGChevronLeft css={prevProjectUrl ? chevronCss : chevronCssGray} />
                        </li>
                    </a> */}
                    <a href={`${timeline}/#project${projectNum}`} className="ml-3">
                        <div className={timeline ? text : textgray}>Timeline</div>
                    </a>
                    <li className="flex ml-3 mr-3 no-underline font-semibold">
                        {isProject ?
                            <div className={text}>Blog for Project {projectNum}</div>
                            :
                            <div className={text}>Blog</div>
                        }
                    </li>
                    <a href={about} className="mr-3">
                        <div className={about ? text : textgray}>About</div>
                    </a>
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