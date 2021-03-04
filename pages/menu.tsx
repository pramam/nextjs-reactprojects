import Menu from '../components/6-Menu/Menu'
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function DisplayMenu() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-300 via-red-100 to-gray-300">
            <ProjectNavbarContainer
                projectName="Menu"
                textColor="text-gray-900"
            />
            <Menu />
        </div>
    )
}