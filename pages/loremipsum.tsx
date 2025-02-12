import LoremIpsum from '../components/11-LoremIpsum/LoremIpsum'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayLoremIpsum() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-300 via-green-300 to-gray-300">
            <ProjectNavbarContainerSimple
                projectId={11}
                textColor="text-gray-900"
                includeBlogs={false}
                fixed={false}
            />
            <LoremIpsum />
        </div>
    )
}