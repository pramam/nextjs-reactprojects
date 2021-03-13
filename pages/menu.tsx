import Menu from '../components/6-Menu/Menu'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayMenu() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-300 via-red-100 to-gray-300">
            <ProjectNavbarContainerSimple
                projectId={7}
                textColor="text-gray-900"
                includeBlogs={false}
            />
            <Menu />
        </div>
    )
}