import Accordion from '../components/5-Accordion/Accordion'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayAccordion() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <ProjectNavbarContainerSimple
                projectId={6}
                textColor="text-white"
                includeBlogs={false}
            />
            <Accordion />
        </div>
    )
}