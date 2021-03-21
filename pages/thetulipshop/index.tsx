import TheTulipShop from '../../components/18-TheTulipShop'
import ProjectNavbarContainerSimple from '../../components/projects/ProjectNavbarContainerSimple'


export default function DisplayTheTulipShop() {
    return (
        <div className="relative">
            <ProjectNavbarContainerSimple
                projectId={18}
                textColor="text-gray-900"
                includeBlogs={false}
            />
            <TheTulipShop />
        </div>
    )
}