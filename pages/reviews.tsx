import Reviews from '../components/4-Reviews/Reviews'
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function ShowReviews() {
    return (
        <div className="min-h-screen bg-blue-50">
            <ProjectNavbarContainer
                projectName="Reviews"
                textColor="text-gray-900"
            />
            <Reviews />
        </div>)
}