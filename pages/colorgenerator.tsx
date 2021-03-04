import ColorGen from '../components/12-ColorGenerator/ColorGen'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayColorGenerator() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
            <ProjectNavbarContainerSimple
                projectName="Color Generator"
                textColor="text-gray-900"
            />
            <ColorGen />
        </div>
    )
}