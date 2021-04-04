import { getProjectData } from '../../utils/getProjectData'
import ProjectNavbarSimple from './ProjectNavbarSimple'

// Don't put the text color in the json file. Purgecss will strip it away for
// production builds if it doesn't find the color in the code.
export interface IProps {
    projectId: number
    textColor: string
    includeBlogs: boolean
    fixed: boolean
}

// projectId is from one source of truth: /data/allprojects.json
export default function ProjectNavbarContainerSimple({ projectId, textColor, includeBlogs, fixed }: IProps) {
    const projectData = getProjectData(projectId, includeBlogs)
    const { status, isProject, projectNum, prevProjectUrl, nextProjectUrl, timeline, about } = projectData;
    if (status != "OK")
        console.log(`${projectId}:  status: ${status}`)
    
    return (
        <div>
            {fixed ?
                // pt-6 is for fixed Project Navbar 
                <div className="pt-6" >
                <ProjectNavbarSimple projectNum={projectNum}
                prevProjectUrl={prevProjectUrl}
                nextProjectUrl={nextProjectUrl}
                timeline={timeline}
                about={about}
                textColor={textColor}
                isProject={isProject}
                includeBlogs={includeBlogs}
                fixed={true}
                />
                </div>
                :
                <ProjectNavbarSimple projectNum={projectNum}
                    prevProjectUrl={prevProjectUrl}
                    nextProjectUrl={nextProjectUrl}
                    timeline={timeline}
                    about={about}
                    textColor={textColor}
                    isProject={isProject}
                    includeBlogs={includeBlogs}
                    fixed={false}
                />
            }
        </div>

        // <div className = "pt-6 bg-gray-500" >
        // <ProjectNavbarSimple projectNum={projectNum}
        //     prevProjectUrl={prevProjectUrl}
        //     nextProjectUrl={nextProjectUrl}
        //     timeline={timeline}
        //     about={about}
        //     textColor={textColor}
        //     isProject={isProject}
        //     includeBlogs={includeBlogs}
        // />
        // </div >
    )
}