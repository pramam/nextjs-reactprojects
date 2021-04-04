import Reviews from '../components/4-Reviews/Reviews'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function ShowReviews() {
    return (
        <div className="min-h-screen bg-blue-50">
            <ProjectNavbarContainerSimple
                projectId={5}
                textColor="text-gray-900"
                includeBlogs={false}
                fixed={false}
            />
            <Reviews />
        </div>)
}