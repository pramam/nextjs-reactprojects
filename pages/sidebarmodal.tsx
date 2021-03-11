import SidebarModal from '../components/16-SidebarModal'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplaySidebarModal() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-500 via-gray-400 to-green-500 ">
            <ProjectNavbarContainerSimple
                projectName="Sidebar Modal"
                textColor="text-gray-900"
            />
            <SidebarModal />
        </div>
    )
}