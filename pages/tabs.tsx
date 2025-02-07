import Tabs from '../components/8-Tabs/Tabs'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayTabs() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
            <ProjectNavbarContainerSimple
                projectId={8}
                textColor="text-gray-900"
                includeBlogs={false}
                fixed={false}
            />
            <Tabs />
        </div>
    )
}