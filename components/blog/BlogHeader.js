import allprojectsData from '../../data/allprojects.json'
import ProjectNavbarBlog from './ProjectNavbarBlog'
import InspirationNavbarBlog from './InspirationNavbarBlog'

export default function BlogHeader({ id }) {
    const entry = allprojectsData.find(item => item.id === id)
    return (
        <div>
            <ProjectNavbarBlog
                projectId={id}
                textColor="text-gray-900"
            />
            <InspirationNavbarBlog
                projectId={id}
                textColor="text-gray-900"
            />
        </div>
    )
}