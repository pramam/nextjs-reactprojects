import BubbleWrap from '../components/0-Bubbles/BubbleWrap'
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function projects() {
    return (
        <>
            <ProjectNavbarContainer
                projectName="Bubble Wrap"
                textColor="text-gray-900"
            />
        <BubbleWrap rows={8} cols={10} />
        </>
    )
}