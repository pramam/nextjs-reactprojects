import Navbar from "../components/14-Navbar/Navbar";
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function NavbarProject() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100">
            <ProjectNavbarContainerSimple
                projectId={14}
                textColor="text-gray-900"
                includeBlogs={false}
                fixed={false}
            />
            <Navbar />
        </div>
    )
}