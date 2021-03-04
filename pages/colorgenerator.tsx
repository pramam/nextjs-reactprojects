import ColorGen from '../components/12-ColorGenerator/ColorGen'
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function DisplayColorGenerator() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
            <ProjectNavbarContainer
                projectName="Color Generator"
                textColor="text-gray-900"
            />
            <ColorGen />
        </div>
    )
}