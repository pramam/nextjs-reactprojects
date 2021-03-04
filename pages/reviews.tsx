import Reviews from '../components/4-Reviews/Reviews'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function ShowReviews() {
    return (
        <div className="min-h-screen bg-blue-50">
            <ProjectNavbarContainerSimple
                projectName="Reviews"
                textColor="text-gray-900"
            />
            <Reviews />
        </div>)
}