import Accordion from '../components/5-Accordion/Accordion'
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function DisplayAccordion() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <ProjectNavbarContainer
                projectName="Accordion"
                textColor="text-white"
            />
            <Accordion />
        </div>
    )
}