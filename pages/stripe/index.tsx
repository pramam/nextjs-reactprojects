import Stripe from '../../components/17-Stripe-Submenus'
import ProjectNavbarContainerSimple from '../../components/projects/ProjectNavbarContainerSimple'

export default function DisplayStripe() {
    return (
        <div>
            <ProjectNavbarContainerSimple
                projectId={17}
                textColor="text-gray-900"
                includeBlogs={false}
            />
        <Stripe />
        </div>
    )
}