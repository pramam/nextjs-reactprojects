import { getProjectData } from '../../utils/getProjectData'
import Link from 'next/link'

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
    
    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row justify-center">
                    {/* #TIMELINE*/}
                    {timeline === "/" ?
                        <Link href={`/#project${projectNum}`}>
                            <a className="ml-3">
                                <div className={timeline ? text : textgray}>Timeline</div>
                            </a>
                        </Link> :
                        <Link href={`${timeline}/#project${projectNum}`}>
                            <a className="ml-3">
                            <div className={timeline ? text : textgray}>Timeline</div>
                        </a>
                        </Link>
                    }
                    <li className="flex ml-3 mr-3 no-underline font-semibold">
                        {isProject ?
                            <div className={text}>Blog for Project {projectNum}</div>
                            :
                            <div className={text}>Blog</div>
                        }
                    </li>
                    <Link href={about}>
                        <a className="mr-3">
                            <div className={about ? text : textgray}>About</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div >
    )

}