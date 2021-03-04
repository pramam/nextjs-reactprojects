import { getProjectData } from '../../utils/getProjectData'
import ProjectNavbarSimple from './ProjectNavbarSimple'

// Don't put the text color in the json file. Purgecss will strip it away for
// production builds if it doesn't find the color in the code.
export interface IProps {
    projectName: string
    textColor: string
}

export default function ProjectNavbarContainerSimple({ projectName, textColor }: IProps) {
    const projectData = getProjectData(projectName)
    const { status, projectNum, prevProjectUrl, nextProjectUrl, timeline, about } = projectData;
    if (status != "OK")
        console.log(`${projectName}:  status: ${status}`)
    // console.log(`projectNum: ${projectNum},dayNum: ${dayNum}`)
    // console.log(`blogUrl: ${blogUrl}`)
    // console.log(`prevProjectUrl: ${prevProjectUrl}; nextProjectUrl: ${nextProjectUrl}`)

    return (
        <ProjectNavbarSimple projectNum={projectNum}
            // dayNum={dayNum}
            // blogUrl={blogUrl}
            // githubUrl={githubUrl}
            prevProjectUrl={prevProjectUrl}
            nextProjectUrl={nextProjectUrl}
            timeline={timeline}
            about={about}
            // inspiration={inspiration}
            textColor={textColor}
        />
    )
}