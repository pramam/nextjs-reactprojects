import Tabs from '../components/8-Tabs/Tabs'
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function DisplayTabs() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
            <ProjectNavbarContainer
                projectName="Tabs"
                textColor="text-gray-900"
            />
            <Tabs />
        </div>
    )
}