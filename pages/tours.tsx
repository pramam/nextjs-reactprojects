import Tours from "../components/3-Tours/Tours";
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function ListTours() {
    return (
        <div className="min-h-screen bg-blue-50">
            <ProjectNavbarContainerSimple
                projectId={4}
                textColor="text-gray-900"
            />
            <Tours />
        </div>
    )
}