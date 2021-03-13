import { getProjectData } from '../../utils/getProjectData'
import ProjectNavbar from './ProjectNavbar'

// Don't put the text color in the json file. Purgecss will strip it away for
// production builds if it doesn't find the color in the code.
export interface IProps {
    projectName: string
    textColor: string
}

export default function ProjectNavbarContainer({ projectName, textColor }: IProps) {
    const projectData = getProjectData(projectName, false)
    const { status, projectNum, dayNum, blogUrl, githubUrl, prevProjectUrl, nextProjectUrl, inspiration } = projectData;
    if (status != "OK")
        console.log(`${projectName}:  status: ${status}`)
    // console.log(`projectNum: ${projectNum},dayNum: ${dayNum}`)
    // console.log(`blogUrl: ${blogUrl}`)
    // console.log(`prevProjectUrl: ${prevProjectUrl}; nextProjectUrl: ${nextProjectUrl}`)

    return (
        <ProjectNavbar projectNum={projectNum}
            dayNum={dayNum}
            blogUrl={blogUrl}
            githubUrl={githubUrl}
            prevProjectUrl={prevProjectUrl}
            nextProjectUrl={nextProjectUrl}
            inspiration={inspiration}
            textColor={textColor}
        />
    )
}