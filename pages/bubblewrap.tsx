import BubbleWrap from '../components/0-Bubbles/BubbleWrap'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function projects() {
    return (
        <>
            <ProjectNavbarContainerSimple
                projectId={1}
                textColor="text-gray-900"
            />
        <BubbleWrap rows={8} cols={10} />
        </>
    )
}