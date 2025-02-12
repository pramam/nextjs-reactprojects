import NavbarTailwind from "../components/14-Navbar/15-NavbarTailwind/NavbarTailwind";
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function NavbarTailwindTransition() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100">
            <ProjectNavbarContainerSimple
                projectId={15}
                textColor="text-gray-900"
                includeBlogs={false}
                fixed={false}
            />
            <NavbarTailwind />
        </div>
    )
}