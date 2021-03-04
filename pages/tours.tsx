import Tours from "../components/3-Tours/Tours";
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function ListTours() {
    return (
        <div className="min-h-screen bg-blue-50">
            <ProjectNavbarContainer
                projectName="Tours"
                textColor="text-gray-900"
            />
            <Tours />
        </div>
    )
}